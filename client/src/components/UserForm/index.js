import React, { useState } from "react";
import { loadQuiz, addUsername, updateDifficulty, resetState } from "../../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { UserCount } from "../";
import logo from "../../favicon.svg";

function UserForm() {
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const quizRequest = { category, difficulty };
    dispatch(loadQuiz(category, difficulty));
    dispatch(addUsername(username));
    dispatch(updateDifficulty(difficulty));
    history.push("/QuestionPage");
  };

  const reset = () => {
    dispatch(resetState());
  };

  const updateUsername = (e) => {
    const input = e.target.value;
    setUsername(input);
  };

  const updateCategory = (e) => {
    const input = e.target.value;
    setCategory(input);
  };

  const sendDifficulty = (e) => {
    const input = e.target.value;
    setDifficulty(input);
  };

  return (
    <>
      {reset()}
      <div className=' rounded-xl bg-white  mt-20 w-11/12 h-auto m-auto px-10 py-5 shadow-xl flex flex-col justify-center text-center mb-10'>
        <div className='flex flex-col justify-center'>
          <img alt='Quizzo Logo' src={logo} class='w-20 mx-auto'></img>
          <h1 className='text-center text-4xl font-extrabold'>Quizzo</h1>
        </div>
        <h2 className='text-center text-2xl py-3'> Enter options to start quiz! </h2>
        <form aria-label='userForm' className='flex flex-col mx-auto' role='form' onSubmit={handleSubmit}>
          <label className=' text-xl' placeholder='Enter Username' htmlFor='username'>
            Username:
          </label>
          <input
            className=' text-xl shadow border rounded-md w-full py-2 px-3 text-gray-700 mt-1 leading-tight  outline-none focus:outline-none focus-within:border-blue-400 transition-all duration-500 focus:border'
            id='username'
            type='text'
            onMouseOver={(e) => (e.target.placeholder = "")}
            onMouseOut={(e) => (e.target.placeholder = "Enter a username...")}
            value={username}
            onChange={updateUsername}
            required
          />
          <label className=' text-xl mt-8' htmlFor='categorySelect'>
            Category:
          </label>
          <select
            defaultValue={"DEFAULT"}
            className=' text-xl shadow border rounded-md w-full py-2 px-3 text-gray-700 mt-1 leading-tight  outline-none focus:outline-none focus-within:border-blue-400 transition-all duration-500 focus:border'
            name='category'
            id='categorySelect'
            required
            onChange={updateCategory}
          >
            <option value='DEFAULT' disabled>
              Choose a Category...{" "}
            </option>
            <option value='9'>General Knowledge</option>
            <option value='31'>Anime and Manga</option>
            <option value='10'>Books</option>
            <option value='11'>Film</option>
            <option value='22'>Geography</option>
            <option value='23'>History</option>
            <option value='12'>Music</option>
            <option value='17'>Science and Nature</option>
            <option value='14'>Television</option>
            <option value='15'>Video Games</option>
          </select>
          <label className=' text-xl mt-8' htmlFor='difficultySelect'>
            Difficulty:
          </label>
          <select
            defaultValue={"DEFAULT"}
            className=' text-xl shadow border rounded-md w-full py-2 px-3 text-gray-700 mt-1 leading-tight  outline-none focus:outline-none focus-within:border-blue-400 transition-all duration-500 focus:border'
            name='difficulty'
            id='difficultySelect'
            required
            onChange={sendDifficulty}
          >
            <option value='DEFAULT' disabled>
              Choose a Difficulty
            </option>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
          <input
            className=' text-white bg-purple-darker rounded-full focus:bg-purple-700 w-auto px-28 font-bold text-lg mx-auto p-2 mt-8'
            type='submit'
            value='Submit'
          />
        </form>

        <UserCount />
      </div>
    </>
  );
}
export default UserForm;
