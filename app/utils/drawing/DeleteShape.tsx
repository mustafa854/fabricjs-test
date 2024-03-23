export const removeShape =( shape: fabric.Object, canvas: fabric.Canvas ) =>{
console.log("shape", shape,canvas);
canvas.remove(shape);
canvas.renderAll();


}