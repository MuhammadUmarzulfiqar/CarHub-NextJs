"use client"; import React from 'react'
import Image from "next/image";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { useRouter } from "next/navigation";
import { manufacturers } from '../constants/index';
const SearchButton = ({ otherClasses }: { otherClasses: string }) =>
(
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src={"/magnifying-glass.svg"}
            alt={"magnifying glass"}
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
)
const SearchBar = () => {
    const [manufacture, setMenufacturer] = useState("");
    const [model, setModel] = useState("");
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (manufacture.trim() === '' && model.trim() === '') {
            return alert("Please provide some input")
        }
        updateSearchParams(model.toLowerCase(), manufacture.toLowerCase());
    };
    const updateSearchParams = (model: string, manufacture: string) => {
        const searchParams = new URLSearchParams(window.location.search);
        if (model) {
            searchParams.set("model", model)

        } else {
            searchParams.delete("model");
        }
        if (manufacture) {
            searchParams.set("manufacture", manufacture)
        } else {
            searchParams.delete("manufacture")
        }
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathname)
    }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer manufacturer={manufacture} setManuFacturer={setMenufacturer} /> <SearchButton otherClasses='sm:hidden' />
            </div><div className='searchbar__item'>
                <Image
                    src='/model-icon.png'
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4'
                    alt='car model'
                /> <input
                    type='text'
                    name='model'
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder='Tiguan...'
                    className='searchbar__input'
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form>
    )
}
export default SearchBar
