'use client';
function Form({ setTodos, gerarIdAleatorio }) {
    const handleSubmit = (event) => {
      event.preventDefault();
      // reset the form
      const value = event.target.todo.value;
      setTodos((prevTodos) => [
        ...prevTodos,
        { title: value, id: gerarIdAleatorio(), is_completed: false },
      ]);
      event.target.reset();
    };
    return (
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="todo">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Write your next task"
          />
        </label>
        <button>
          <span className="visually-hidden">Submit</span>
          <svg 
              version="1.1" 
              id="Layer_1" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 32 32" 
              enableBackground="new 0 0 32 32"
            >
              <rect x="10" y="15" width="12" height="2"/>
              <rect x="15" y="10" width="2" height="12"/>
              <circle 
                fill="none" 
                stroke="#000000" 
                strokeWidth="2" 
                strokeMiterlimit="10" 
                cx="16" 
                cy="16" 
                r="12"
            />
          </svg>
        </button>
      </form>
    );
  }
  export default Form;