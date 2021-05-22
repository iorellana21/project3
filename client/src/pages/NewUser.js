import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NewUser.css';



export default function NewUser(){

    const location = useLocation();

    return (
        <div className=" row newUser-bg  d-flex">
                        <div className="col-6 mx-auto">
                            <div className="p-2 mx-auto d-block text-center">
                                
                            <form>
                        <div className="form-group">
                            <label htmlFor='userNameId'>Create User Name </label>
                            <input type="text" placeholder="create user name"className="form-control" id="userNameId" />
                        </div>
                        
                        <Link to='/dashboard' className={location.pathname === '/dashboard' ? 'nav-link' : 'nav-link text-white btn btn-primary w-100'}>Create User Name</Link>
                        {/* <button type="submit" className="btn btn-primary w-100">Create User Name</button> */}
                        
                    </form>
                            </div>
                        </div>
                    </div>
        
    )
};