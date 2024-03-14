import { useState } from "react";
import { ChangeEvent } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./modal.css";
export type InputEvent = ChangeEvent<HTMLInputElement>;
export const Modal = ({
  isOpen,
  handleOpen,
}: {
  isOpen: boolean;
  handleOpen: () => void;
}) => {
  const [form, setForm] = useState({
    firstname:'', lastname:'', email: '', content:''
  });
  const handleClose = () => {
    handleOpen();
  };
  const handleChange = (e: InputEvent) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(form);
    handleOpen()
  };

  return (
    <>
      {isOpen && (
        <div className="fixed momo overflow-y-auto inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg wrap p-8 max-w-md card-glass animate-scale">
            <div className="flex justify-end">
              <FontAwesomeIcon
                onClick={handleClose}
                className="cursor-pointer"
                size="xl"
                icon={faXmark}
              />
            </div>
            <form className="w-full max-w-lg" onSubmit={(e:any) => handleSubmit(e)}>
              <div className="mb-6 gap-2">
                <div className='md:flex'>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="tracking-wide">
                    First Name
                  </label>
                  <input
                    className=" w-full p-3 mt-3 leading-tight "
                    id="firstname"
                    name='firstname'
                    type="text"
                    placeholder="Type your firstname"
                    onChange={(e:any) => handleChange(e)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="tracking-wide">
                    Last Name
                  </label>
                  <input
                    className=" w-full p-3 mt-3 leading-tight "
                    id="lastname"
                    name='lastname'
                    type="text"
                    placeholder="Type your lastname"
                    onChange={(e:any) => handleChange(e)}
                  />
                </div>
                </div>
                <div className="w-full p-3">
                  <label className="block tracking-wide mb-2">
                    Email
                  </label>
                  <input
                    className="block w-full py-3 px-4 leading-tight "
                    id="email"
                    name='email'
                    type="email"
                    placeholder="Type your email"
                    onChange={(e:any) => handleChange(e)}
                  />
                </div>
                <div className="w-full px-3">
                  <label className="block tracking-wide mb-2">
                    Content
                  </label>
                  <textarea
                    className=" block w-full py-3 px-4 leading-tight "
                    id="content"
                    name='content'
                    placeholder="Type your content"
                    onChange={(e:any) => handleChange(e)}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
              <button type='submit' className='small-caps bg-prim-1'>Send</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
