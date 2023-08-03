import { useState } from "react";
import { getStorage, ref, uploadString } from "firebase/storage";
import { app } from "../firebase";
import loaderImg from "../assets/images/loader.gif";
import { collection, addDoc, getDocs,getFirestore } from "firebase/firestore";


function Form() {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [loader, setLoader] = useState(true);
const db =getFirestore(app)
  const storage = getStorage(app);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleForm = async(e) => {
    e.preventDefault(e);
    const errors = {};
    (formData.file === "") &&
      (errors.file = "This field is required");
    (formData.foodName === undefined || formData.foodName === "") &&
      (errors.foodName = "This field is required");
    (formData.price === undefined || formData.price === "") &&
      (errors.price = "This field is required");
    (formData.shortDescription === undefined || formData.shortDescription === "") &&
      (errors.shortDescription = "This field is required");
    (formData.addIngredients === undefined || formData.addIngredients === "") &&
      (errors.addIngredients = "This field is required");
    (formData.addInstructions === undefined || formData.addInstructions === "") &&
      (errors.addInstructions = "This field is required");

    setFormErrors(errors);

    await addDoc(collection(db, "recipe"), formData);
    console.log("Document written");
    console.log("added sucssefully")
  };

  // Upload to Firebase Storage
  async function handleImageUpload(e) {
    setLoader(false);
    const file = e.target.files[0];
    const storageRef = ref(storage, `recipe/${file.name}`);
    console.log(e.target.files[0]);
    const reader = new FileReader();
    reader.onloadend = function () {
      console.log("RESULT", reader.result);

      // Data URL string
      uploadString(storageRef, reader.result, "data_url").then((snapshot) => {
        console.log("Uploaded a data_url string!");
        setLoader(true);
        setFormData((prev) => ({
          ...prev,
          recipeImage: `https://firebasestorage.googleapis.com/v0/b/sick2strong-b7f85.appspot.com/o/recipe%2F${file.name}?alt=media`,
        }));
      });
    };
    reader.readAsDataURL(file);


 
  }

  return (
    <div className="mx-auto w-[70%] shadow-[0_0_12px_rgba(211,211,211)] mb-7 ">
      <h2 className="text-4xl font-bold text-center mt-[2em] ">Add a recipe</h2>
      <div className="my-[2em]">
        {formErrors.file && (
          <p className="text-red-500 text-center">{formErrors.file}</p>
        )}
        <div className=" shadow border-gray-300  border-2 w-[80%] rounded mx-auto flex ">
          <input
            type="file"
            placeholder=""
            className="outline-0 p-7 bg-transparent "
            name="file"
            onChange={(e) => handleImageUpload(e)}
          />
          {loader ? (
            <img src={formData.recipeImage && formData.recipeImage}  className="w-[150px] h-[100px]"/>
          ) : (
            <img src={loaderImg} alt="" />
          )}
        </div>
      </div>
      <div className="my-[2em]">
        {formErrors.foodName && (
          <p className="text-red-500 text-center">{formErrors.foodName}</p>
        )}
        <div className=" shadow border-gray-300  border-2 w-[80%] rounded mx-auto ">
          <input
            type="text"
            placeholder="Food Name"
            className="outline-0 p-7 bg-transparent "
            name="foodName"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="my-[2em]">
        {formErrors.shortDescription && (
          <p className="text-red-500 text-center">
            {formErrors.shortDescription}
          </p>
        )}
        <div className=" shadow border-gray-300  border-2 w-[80%] rounded mx-auto ">
          <input
            type="text"
            placeholder="Short Description"
            className="outline-0 p-7 bg-transparent "
            name="shortDescription"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="my-[2em]">
        {formErrors.price && (
          <p className="text-red-500 text-center">{formErrors.price}</p>
        )}
        <div className=" shadow border-gray-300  border-2 w-[80%] rounded mx-auto ">
          <input
            type="text"
            placeholder="Price"
            className="outline-0 p-7 bg-transparent "
            name="price"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="my-[2em]">
        {formErrors.addIngredients && (
          <p className="text-red-500 text-center">
            {formErrors.addIngredients}
          </p>
        )}
        <div className=" shadow border-gray-300  border-2 w-[80%] rounded mx-auto ">
          <input
            type="textarea"
            placeholder="Add Ingredients"
            className="outline-0 p-7 bg-transparent "
            name="addIngredients"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="my-[2em]">
        {formErrors.addInstructions && (
          <p className="text-red-500 text-center">
            {formErrors.addInstructions}
          </p>
        )}
        <div className=" shadow border-gray-300  border-2 w-[80%] rounded mx-auto ">
          <input
            type="textarea"
            placeholder="Add Instructions"
            className="outline-0 p-7 bg-transparent "
            name="addInstructions"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={(e) => handleForm(e)}
          className=" p-3  rounded-full shadow font-bold text-center text-2xl mb-[1em] w-[30%] mx-auto bg-green-300 text-black  "
        >
          Add Recipe
        </button>
      </div>
    </div>
  );
}
export default Form;
