import './Work.css'; // Make sure to import the CSS file

const workdata = [
    {
        imgSrc: '/src/components/Work/images/icon-one.svg',
        heading: 'Create <span class="highlight">Account</span>',
        subheading: 'Lorem Ipsum is simply dummy text',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/src/components/Work/images/icon-two.svg',
        heading: 'Find your <span class="highlight">Credit</span>',
        subheading: 'Lorem Ipsum is simply dummy text',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/src/components/Work/images/icon-three.svg',
        heading: 'Exchange <span class="highlight">Currency</span>',
        subheading: 'Lorem Ipsum is simply dummy text',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
];

const Work = () => {
    return (
        <div className="work-container">
            <div className="text-center header">
                <h3 className="title">How it <span className="highlight">works</span> ?</h3>
            </div>

            <div className="work-grid">
                {workdata.map((item, i) => (
                    <div className="card" key={i}>
                        <div className="work-img-bg">
                            <img src={item.imgSrc} alt={`icon-${i + 1}`} className="work-img" />
                        </div>
                        <div>
                            <img src='/src/components/Work/images/bg-arrow.svg' alt="arrow-bg" className="arrow-img" />
                        </div>
                        <h3 className="heading" dangerouslySetInnerHTML={{ __html: item.heading }}></h3>
                        <p className="subheading">{item.subheading}</p>
                        <div className="hiddenpara-container">
                            <span className="hiddenpara">{item.hiddenpara}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work;
