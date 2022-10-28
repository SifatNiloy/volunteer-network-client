import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='photo url' type="text" {...register("img")} />
                {/* <textarea className='mb-2' placeholder='description' {...register("lastName")} />
                <input className='mb-2' placeholder='price' type="number" {...register("age")} /> */}

                <input type="Add Service" />
            </form>
        </div>
    );
};

export default AddService;