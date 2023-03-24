import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className='navbar bg-dark'>
      <div className='container-fluid'>
      <ul className='d-flex'>
        <li className="nav-item me-4">
          <button>
          <Link className='text-dark nav-link' to="/">Home</Link>
          </button>
        </li>

        <li className="nav-item me-4">
        <button>
            <Link className='text-dark nav-link' to="/Todo">Add Task</Link>
            </button>
        </li>
        <li className="nav-item me-4">
        <button>
            <Link className='text-dark nav-link' to="/todolist">Todo Task</Link>
            </button>
        </li>

        <li className="nav-item me-4">
        <button>
            <Link className='text-dark nav-link' to="/update">Update Todo Task</Link>
            </button>
        </li>
        <li className="nav-item me-4">
        <button>
            <Link className='text-dark nav-link' to="/delete">delete Todo Task</Link>
            </button>
        </li>
        
        <li className="nav-item me-4">
        <button>
            <Link className='text-dark nav-link' to="/login">login</Link>
            </button>
        </li> 
        <li className="nav-item me-4">
        <button>
            <Link className='text-dark nav-link' to="/register">Register</Link>
            </button>
        </li>
     
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
