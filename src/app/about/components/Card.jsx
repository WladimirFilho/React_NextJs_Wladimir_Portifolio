import React from 'react';
import Image from 'next/image';


export default function Card({ability}) {

    return (
        <div className='flex items-start gap-3 w-[350px]'>
            <Image src={'/assets/card_icon.png'} width={30} height={30} alt={'card'}/>
            <div>

                <h3 className='font-bold'>{ability.title}</h3>
                <h3>{ability.description}</h3>

            </div>

        </div>
    );
}
