from flask import Flask, request, render_template, jsonify
import random
import os
import numpy as np
from keras.models import load_model
from keras.utils import load_img, img_to_array

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/uploads'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# ---------------------------
# Load ML Model for Disease Detection
# ---------------------------
MODEL_PATH = "model/plant_model.h5"
model = load_model(MODEL_PATH)

# Class labels (order must match training dataset)
class_names = ["Potato__Early_blight", "Potato_Late_blight", "Potato__healthy"]

def predict_disease(img_path):
    img = load_img(img_path, target_size=(256, 256))
    img_array = img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    predictions = model.predict(img_array)
    predicted_class = class_names[np.argmax(predictions)]
    confidence = round(100 * np.max(predictions), 2)
    return predicted_class, confidence

# ---------------------------
# Dummy Sensor Data Generator
# ---------------------------
def get_sensor_data():
    return {
        "pH": round(random.uniform(5.0, 8.5), 2),
        "soil_moisture": random.randint(20, 80),
        "temperature": random.randint(15, 35),
        "humidity": random.randint(30, 90),
        "iaq": random.randint(10, 150),
        "co2": random.randint(300, 1200)
    }

# ---------------------------
# Routes
# ---------------------------
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/data")
def data():
    return jsonify(get_sensor_data())

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No file selected"}), 400
    
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(filepath)
    
    prediction, confidence = predict_disease(filepath)
    
    return jsonify({
        "prediction": prediction,
        "confidence": confidence,
        "image_path": filepath
    })

# ---------------------------
# Run App
# ---------------------------
if __name__ == "__main__":
    app.run(debug=True)
