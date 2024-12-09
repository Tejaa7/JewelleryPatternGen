from typing import Annotated
from PIL import Image
from fastapi import FastAPI
from fastapi import FastAPI, File, UploadFile
app=FastAPI()
@app.post("/upload")
async def upload(file:UploadFile):
    x=await file.read()
    with open(file.filename,"wb") as fp:
        fp.write(x)
    

# def image_tensor(image_path): 
#     image_data = tf.io.read_file(image_path)

#     image_tensor = tf.image.decode_jpeg(image_data, channels=3)

#     image_resized = tf.image.resize(image_tensor, [256, 256])

#     image_normalized = (image_resized / 127.5) - 1
#     image_tensor = tf.cast(image_normalized, tf.float32)
#     image_batched = tf.expand_dims(image_tensor, axis=0)
#     return image_batched




