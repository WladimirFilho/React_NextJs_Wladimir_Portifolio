import React from "react";
import {abilities} from "../../data/abilities";
import {BsCircleFill} from "react-icons/all";

export const ThingsCardsSection = () => {
	return (
		<div className='grid grid-cols-3 gap-8'>

			{abilities.map((ability) => (
				<div className='flex gap-6' key={ability.id}>
					<div className='relative'>
						<BsCircleFill className='text-yellow-500' size={45}/>
						{ability.icon}
					</div>

					<div className='flex flex-col'>
						<h3 className='font-bold'>{ability.title}</h3>
						<h3>{ability.description}</h3>
					</div>

				</div>
			))}
		</div>
	)
}
