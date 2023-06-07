import React from "react";
import {BsCircleFill} from "react-icons/all";
import {certifications} from "../../data/certifications";

export const CertificationCardsSection = () => {
	return (
		<div className='lg:grid lg:grid-cols-2 gap-14 gap-x-32 flex flex-col'>

			{certifications.map((ability) => (
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
