import Chef from './images/chef.jpg'

const Ourstory = () => {
    return (
        <section className="mx-8">
            <h2 className="text-xl font-bold mb-8">Our story</h2>
            <div className="xl:flex justify-between">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Proin nulla nunc, lobortis id ipsum et, aliquam pellentesque tellus. <br/> Pellentesque ornare leo nec congue eleifend. <br/> Quisque accumsan elit urna, at tincidunt odio sodales et. <br/> Etiam ac ipsum mattis, porta elit at, pellentesque nisl. <br/> In massa purus, accumsan quis tristique sagittis, consequat vitae ligula. <br/> Fusce fermentum eros quis ante semper, pharetra mollis lectus ultrices. <br/> Vestibulum feugiat condimentum purus vitae faucibus. <br/> Vestibulum maximus lobortis lectus ac pulvinar. <br/> Aliquam nec dolor ex. <br/> Quisque nisi risus, aliquam eu venenatis non, fringilla sed diam. <br/> Quisque ac commodo enim. <br/> Duis euismod urna at vestibulum ultrices. <br/> Etiam sodales lectus mauris, vel fermentum justo finibus sit amet. <br/> Aenean tempus bibendum leo, ac accumsan metus molestie eu. <br/> Phasellus auctor urna tellus, interdum volutpat dolor dapibus vel.
                </p>
                <img 
                    className="xl:w-2/4"
                    src={Chef}>

                </img>
            
            </div>
           

        </section>
    )
};
   

export default Ourstory;
