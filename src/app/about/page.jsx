import Card from "./components/Card";
import {abilities} from "../data/abilities";

export const metadata = {
    title: "About page",
};

export const About = () => {

    return (
        <>
            <section className='w-full lg:px-16'>

                {/* Title and description */}
                <div className="max-w-[768px] mx-auto mb-16 lg:mb-32">

                    <h1 className='mainTitle'>I litle bit
                        about<br/> aspirations</h1>

                    <p className='text-center '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod
                        tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation ullamco laboris
                        nisi
                        ut aliquip ex ea commodo consequat.</p>
                </div>
                {/* Cards My Abilities */}

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-8'>
                    {abilities.map((ability) => (
                        <Card key={ability.id} ability={ability}/>
                    ))}

                </div>
            </section>
        </>
    );
};
export default About;
