import React from 'react'
import service_info_img1 from '@/public/images/info_servicesItemImg1.png'
import service_info_img2 from '@/public/images/info_servicesItemImg2.png'
import service_info_img3 from '@/public/images/info_servicesItemImg3.png'
// import ButtonComponent from '../ButtonComponent/ButtonComponent'
// import { cookies } from 'next/headers'; 
import { StaticImageData } from 'next/image'
import InfoServicesButton from '../ServerSideButton/ServerSideButton'
import { useTranslations } from 'next-intl'


interface IServicesItem {
    id: string,
    img: StaticImageData,
    title: string,
    route: string;
}
const InfoServices = () => {
    // const cookieStore = await cookies();
    // const lang = cookieStore.get('lang')?.value || 'am'; 
    // const lang = localStorage.getItem("lang")

    const t = useTranslations("InfoServices")
    
    const servicesData: IServicesItem[] = [
        {
            id: '1',
            img: service_info_img1,
            title: t("titles.0"),
            route: `/turnstile`,
        },

        {
            id: '2',
            img: service_info_img2,
            title: t("titles.1"),
            route: `/smart-home`,
        },

        {
            id: '3',
            img: service_info_img3,
            title: t("titles.2"),
            route: `/security-systems`,
        },
    ]
    return (
        <div className='info_services'>
            <div className="container flex flex-wrap justify-center gap-[20px] px-[20px]">
                {
                    servicesData.map((service: IServicesItem) => (
                        <div style={{ backgroundImage: `url(${service.img.src})` }} key={service.id} className='flex items-center justify-end gap-[20px] bg-cover bg-center bg-no-repeat grow basis-[300px] h-[264px] rounded'>
                            <div className='flex flex-col gap-[20px] items-start max-w-[150px] mr-[50px]'>
                                <h3 className='text-[22px] font_color font-semibold  leading-[32px] w-full arm_Hmks_Bebas_Neue'>{service.title}</h3>
                                {
                                    service.id !== "2" &&  <InfoServicesButton
                                    name={t("btn")}
                                    path={service.route}
                                    bg="#5939F5"
                                    color="#FFFFFF"
                                    size="16px"
                                    width='100%'
                                    px='0'
                                    py="7px"
                               />
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default InfoServices