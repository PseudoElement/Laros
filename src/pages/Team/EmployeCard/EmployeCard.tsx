import { FC, useState } from 'react'
import Image from 'next/image'
import s from './EmployeCard.module.scss'

interface EmployeCardProps{
	imageUrl: string,
	name: string,
	post:string,
	desc:string
}

export const EmployeCard: FC<EmployeCardProps> = ({imageUrl, name, post, desc}) => {

	return (
		<div className={s.wrapper}>
			<Image className={s.photo}
				   src={imageUrl}
				   alt="Picture of the author"
				   width={302}
				   height={320}
			/>
<div className={s.text}>
<p className={s.name}>{name}</p>
	<p className={s.post}>{post}</p>
	<p className={s.desc}>{desc}</p>
</div>
		</div>
	)

}
