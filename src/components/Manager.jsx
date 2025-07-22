// import React from 'react'
// import { useRef, useState, useEffect } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { v4 as uuidv4 } from 'uuid';
// const Manager = () => {
//     const ref = useRef()
//     const passwordRef = useRef()
//     const [form, setform] = useState({ site: "", username: "", password: "" })
//     const [passwordArray, setPasswordArray] = useState([])



//     const getPassword = async () => {
//         let req = await fetch("http://localhost:3000/")
//         let passwords = await req.json()
//         console.log(passwords);
//         setPasswordArray(passwords)

//     }

//     useEffect(() => {
//         getPassword()
//     }, [])

//     const showPassword = () => {
//         passwordRef.current.type = "text"
//         if (ref.current.src === "https://cdn.lordicon.com/dicvhxpz.json") {
//             ref.current.src = "https://cdn.lordicon.com/kezeezyg.json"
//             passwordRef.current.type = "text"
//         } else {
//             ref.current.src = "https://cdn.lordicon.com/dicvhxpz.json"
//             passwordRef.current.type = "password"
//         }
//     }

//     const savePassword = async () => {
//         if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

//             // If any such id exists in the db, delete it 
//             await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id }) })

//             setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
//             await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })

//             // Otherwise clear the form and show toast
//             setform({ site: "", username: "", password: "" })
//             toast('Password saved!', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//             });
//         }
//         else {
//             toast('Error: Password not saved!');
//         }

//     }

//      const deletePassword = async (id) => {
//         console.log("Deleting password with id ", id)
//         let c = confirm("Do you really want to delete this password?")
//         if (c) {
//             setPasswordArray(passwordArray.filter(item => item.id !== id))
            
//             await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })

//             toast('Password Deleted!', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true, 
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//             });
//         }

//     }
//     const editPassword = (id) => {
//         setform({ ...passwordArray.filter(i => i.id === id)[0], id: id })
//         setPasswordArray(passwordArray.filter(item => item.id !== id))
//     }


//     const handleChange = (e) => {
//         setform({ ...form, [e.target.name]: e.target.value })
//     }

//     const copytext = (text) => {
//         toast.success('Copied to clipboard', {
//             position: "top-center",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: false,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//         });
//         navigator.clipboard.writeText(text)
//     }




//     return (
//         <>
//             <ToastContainer
//                 position="top-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick={false}
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="light"
//                 transition="Bounce"
//             />
//             <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
//                 <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
//             </div>
//             <div className="md:mycontainer ">
//                 <h1 className='font-bold text-purple-600 text-2xl text-center'> <span className='text-purple-500'>&lt;</span>
//                     Raaz
//                     <span className='text-purple-500'>/&gt;</span></h1>
//                 <p className='text-purple-700 text-lg text-center'>Your own password manager</p>


//                 <div className="text-black flex flex-col p-4 gap-8">
//                     <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-purple-800 w-full p-4 py-1' type="text" name='site' id='site' />
//                     <div className="flex flex-col md:flex-row w-full justify-between gap-5">
//                         <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-purple-800 w-full p-4 py-1' type="text" name='username' id='username' />

//                         <div className="relative">
//                             <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-purple-800 w-full p-3 py-1' type="password" name='password' id='password' />
//                             <button className='ml-2 absolute' onClick={showPassword}>
//                                 <lord-icon
//                                     ref={ref}
//                                     src="https://cdn.lordicon.com/dicvhxpz.json"
//                                     trigger="hover"
//                                     stroke="bold"
//                                     colors="primary:#121331,secondary:#8930e8"
//                                 >
//                                 </lord-icon>
//                             </button>
//                         </div>
//                     </div>
//                     <div className='flex justify-center'>
//                         <button onClick={savePassword} className='flex justify-centre items-center bg-purple-400 rounded-full px-4 py-2 hover:bg-purple-500 text-purple-950 gap-2 border-2 border-purple-900'>
//                             <lord-icon

//                                 src="https://cdn.lordicon.com/sbnjyzil.json"
//                                 trigger="hover"
//                                 stroke="bold"
//                                 colors="primary:#121331,secondary:#8930e8"
//                             >
//                             </lord-icon>
//                             Save Password</button>
//                     </div>
//                 </div>

//                 <div className="passwords">
//                     <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
//                     {passwordArray.length === 0 && <div>No Passwords to show</div>}

//                     {passwordArray.length !== 0 && <table className="table-auto w-full rounded-md overflow-hidden">
//                         <thead className='bg-purple-500 text-white'>
//                             <tr>
//                                 <th className='py-2'>Site</th>
//                                 <th className='py-2'>Username</th>
//                                 <th className='py-2'>Password</th>
//                                 <th className='py-2'>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className='bg-purple-100 '>

//                             {passwordArray.map((item, index) => {
//                                 return <tr key={index}>
//                                     <td className=' text-center border-2 border-white py-2'>
//                                         <div className="copybtn flex justify-center items-center"> <a href={item.site} target='_blank'>{item.site}</a>
//                                             <div className='size-7 hover:cursor-pointer' onClick={() => { copytext(item.site) }}>
//                                                 <img style={{ width: "25px", height: "25px", padding: "1px", marginTop: "3px", marginLeft: "2px" }} src="/icons/content_paste_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" />
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className=' text-center  border-2 border-white py-2'>
//                                         <div className="copybtn flex justify-center items-center">
//                                             <span>{item.username}</span>
//                                             <div className='size-7 hover:cursor-pointer' onClick={() => { copytext(item.username) }}>
//                                                 <img style={{ width: "25px", height: "25px", padding: "1px", marginTop: "3px", marginLeft: "2px" }} src="/icons/content_paste_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" />
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className=' text-center  border-2 border-white py-2'>
//                                         <div className="copybtn flex justify-center items-center">
//                                             <span>{"*".repeat(item.password.length)}</span>
//                                             <div className='size-7 hover:cursor-pointer' onClick={() => { copytext(item.password) }}>
//                                                 <img style={{ width: "25px", height: "25px", padding: "1px", marginTop: "3px", marginLeft: "2px" }} src="/icons/content_paste_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" />
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className=' text-center  border-2 border-white py-2'>
//                                         <span onClick={() => { deletePassword(item.id) }} className='hover:cursor-pointer'>
//                                             <lord-icon
//                                                 src="https://cdn.lordicon.com/hwjcdycb.json"
//                                                 trigger="morph"
//                                                 state="morph-trash-out"
//                                                 colors="primary:#121331,secondary:#a866ee"
//                                             >
//                                             </lord-icon>
//                                         </span>
//                                         <span onClick={() => { editPassword(item.id) }} className='hover:cursor-pointer'>
//                                             <lord-icon
//                                                 src="https://cdn.lordicon.com/fikcyfpp.json"
//                                                 trigger="hover"
//                                                 stroke="bold"
//                                                 colors="primary:#121331,secondary:#8930e8"
//                                             >
//                                             </lord-icon>
//                                         </span>
//                                     </td>
//                                 </tr>
//                             })}

//                         </tbody>
//                     </table>}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Manager


import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    const getPassword = async () => {
        try {
            let req = await fetch("http://localhost:3000/")
            if (req.ok) {
                let passwords = await req.json()
                console.log(passwords);
                setPasswordArray(passwords)
            }
        } catch (error) {
            console.error("Error fetching passwords:", error);
            toast.error('Failed to load passwords');
        }
    }

    useEffect(() => {
        getPassword()
    }, [])

    const showPassword = () => {
        if (!ref.current || !passwordRef.current) return;
        
        if (ref.current.src.includes("dicvhxpz")) {
            ref.current.src = "https://cdn.lordicon.com/kezeezyg.json"
            passwordRef.current.type = "text"
        } else {
            ref.current.src = "https://cdn.lordicon.com/dicvhxpz.json"
            passwordRef.current.type = "password"
        }
    }

    const savePassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            try {
                const newPassword = { ...form, id: uuidv4() };

                // If editing existing password, delete the old one first
                if (form.id) {
                    await fetch("http://localhost:3000/", { 
                        method: "DELETE", 
                        headers: { "Content-Type": "application/json" }, 
                        body: JSON.stringify({ id: form.id }) 
                    });
                }

                // Save new password to database
                await fetch("http://localhost:3000/", { 
                    method: "POST", 
                    headers: { "Content-Type": "application/json" }, 
                    body: JSON.stringify(newPassword) 
                });

                // Update local state - refresh from server to ensure consistency
                await getPassword();

                // Clear the form
                setform({ site: "", username: "", password: "" });
                
                toast.success('Password saved!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } catch (error) {
                console.error("Error saving password:", error);
                toast.error('Failed to save password');
            }
        } else {
            toast.error('Error: All fields must be more than 3 characters long!');
        }
    }

    const deletePassword = async (id) => {
        console.log("Deleting password with id ", id)
        let c = window.confirm("Do you really want to delete this password?")
        if (c) {
            try {
                await fetch("http://localhost:3000/", { 
                    method: "DELETE", 
                    headers: { "Content-Type": "application/json" }, 
                    body: JSON.stringify({ id }) 
                });

                setPasswordArray(passwordArray.filter(item => item.id !== id));

                toast.success('Password Deleted!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true, 
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } catch (error) {
                console.error("Error deleting password:", error);
                toast.error('Failed to delete password');
            }
        }
    }

    const editPassword = (id) => {
        const passwordToEdit = passwordArray.find(i => i.id === id);
        if (passwordToEdit) {
            setform({ ...passwordToEdit });
            setPasswordArray(passwordArray.filter(item => item.id !== id));
        }
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copytext = (text) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                toast.success('Copied to clipboard', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                toast.error('Failed to copy to clipboard');
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                toast.success('Copied to clipboard');
            } catch (err) {
                toast.error('Failed to copy to clipboard');
            }
            document.body.removeChild(textArea);
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
            </div>
            <div className="md:mycontainer">
                <h1 className='font-bold text-purple-600 text-2xl text-center'>
                    <span className='text-purple-500'>&lt;</span>
                    Raaz
                    <span className='text-purple-500'>/&gt;</span>
                </h1>
                <p className='text-purple-700 text-lg text-center'>Your own password manager</p>

                <div className="text-black flex flex-col p-4 gap-8">
                    <input 
                        value={form.site} 
                        onChange={handleChange} 
                        placeholder='Enter website URL' 
                        className='rounded-full border border-purple-800 w-full p-4 py-1' 
                        type="text" 
                        name='site' 
                        id='site' 
                    />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-5">
                        <input 
                            value={form.username} 
                            onChange={handleChange} 
                            placeholder='Enter Username' 
                            className='rounded-full border border-purple-800 w-full p-4 py-1' 
                            type="text" 
                            name='username' 
                            id='username' 
                        />

                        <div className="relative">
                            <input 
                                ref={passwordRef} 
                                value={form.password} 
                                onChange={handleChange} 
                                placeholder='Enter Password' 
                                className='rounded-full border border-purple-800 w-full p-3 py-1' 
                                type="password" 
                                name='password' 
                                id='password' 
                            />
                            <button className='ml-2 absolute' onClick={showPassword} type="button">
                                <lord-icon
                                    ref={ref}
                                    src="https://cdn.lordicon.com/dicvhxpz.json"
                                    trigger="hover"
                                    stroke="bold"
                                    colors="primary:#121331,secondary:#8930e8"
                                >
                                </lord-icon>
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button 
                            onClick={savePassword} 
                            className='flex justify-centre items-center bg-purple-400 rounded-full px-4 py-2 hover:bg-purple-500 text-purple-950 gap-2 border-2 border-purple-900'
                            type="button"
                        >
                            <lord-icon
                                src="https://cdn.lordicon.com/sbnjyzil.json"
                                trigger="hover"
                                stroke="bold"
                                colors="primary:#121331,secondary:#8930e8"
                            >
                            </lord-icon>
                            {form.id ? 'Update Password' : 'Save Password'}
                        </button>
                    </div>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to show</div>}

                    {passwordArray.length !== 0 && 
                        <table className="table-auto w-full rounded-md overflow-hidden">
                            <thead className='bg-purple-500 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-purple-100'>
                                {passwordArray.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td className='text-center border-2 border-white py-2'>
                                                <div className="copybtn flex justify-center items-center">
                                                    <a href={item.site} target='_blank' rel="noopener noreferrer">
                                                        {item.site}
                                                    </a>
                                                    <div 
                                                        className='size-7 hover:cursor-pointer' 
                                                        onClick={() => { copytext(item.site) }}
                                                    >
                                                        <img 
                                                            style={{ width: "25px", height: "25px", padding: "1px", marginTop: "3px", marginLeft: "2px" }} 
                                                            src="/icons/content_paste_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" 
                                                            alt="Copy" 
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-center border-2 border-white py-2'>
                                                <div className="copybtn flex justify-center items-center">
                                                    <span>{item.username}</span>
                                                    <div 
                                                        className='size-7 hover:cursor-pointer' 
                                                        onClick={() => { copytext(item.username) }}
                                                    >
                                                        <img 
                                                            style={{ width: "25px", height: "25px", padding: "1px", marginTop: "3px", marginLeft: "2px" }} 
                                                            src="/icons/content_paste_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" 
                                                            alt="Copy" 
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-center border-2 border-white py-2'>
                                                <div className="copybtn flex justify-center items-center">
                                                    <span>{"*".repeat(item.password.length)}</span>
                                                    <div 
                                                        className='size-7 hover:cursor-pointer' 
                                                        onClick={() => { copytext(item.password) }}
                                                    >
                                                        <img 
                                                            style={{ width: "25px", height: "25px", padding: "1px", marginTop: "3px", marginLeft: "2px" }} 
                                                            src="/icons/content_paste_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" 
                                                            alt="Copy" 
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-center border-2 border-white py-2'>
                                                <span 
                                                    onClick={() => { deletePassword(item.id) }} 
                                                    className='hover:cursor-pointer mr-2'
                                                >
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/hwjcdycb.json"
                                                        trigger="morph"
                                                        state="morph-trash-out"
                                                        colors="primary:#121331,secondary:#a866ee"
                                                    >
                                                    </lord-icon>
                                                </span>
                                                <span 
                                                    onClick={() => { editPassword(item.id) }} 
                                                    className='hover:cursor-pointer'
                                                >
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/fikcyfpp.json"
                                                        trigger="hover"
                                                        stroke="bold"
                                                        colors="primary:#121331,secondary:#8930e8"
                                                    >
                                                    </lord-icon>
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    )
}

export default Manager
