export default function Design() {
  return (
    <div>
      <div className="bg-green-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">GARDEN DESIGN PHOTO GALLERY</h1>
        <p className="text-lg">
          Browse hundreds of inspiring gardens. Check back often, we add new
          photos on a regular basis!
        </p>
      </div>
      {/* cards */}
      <div className="my-5 grid grid-cols-2 md:grid-cols-3 gap-3">
        {/* card-1 */}
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://th.bing.com/th/id/R.ed254ccd58cdd469fc76e5c05b35de3f?rik=DHYJK5mgrlmsWQ&pid=ImgRaw&r=0"
              alt="Vertical Rooftop Garden"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Vertical Garden!</h2>
            <p>A vertical rooftop garden maximizes space by growing plants upwards on structures, promoting sustainability and greenery in confined urban areas.</p>
          </div>
        </div>
        {/* card-2 */}
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://fthmb.tqn.com/bnR1aJMBg0RLXVwXO0UMikqS7zs=/2125x1416/filters:fill(auto,1)/colorfulpots-56a6704a3df78cf7728deb0e.jpg"
              alt="Container garden"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Container Garden!</h2>
            <p>Container gardening involves cultivating plants in pots or containers, offering flexibility, portability, and accessibility for urban or limited-space gardening.</p>
          </div>
        </div>
        {/* card-3 */}
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://th.bing.com/th/id/R.f625796a92d5193bc7d516e780f47a69?rik=ouj5tRGKqqg2Rg&pid=ImgRaw&r=0"
              alt="Raise_Bed Garden"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Raise_Bed Garden!</h2>
            <p>
Raised bed gardens elevate soil, providing improved drainage, warmer temperatures, and easier access, promoting healthier plant growth in confined spaces.</p>
          </div>
        </div>
        {/* card-4 */}
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.pinimg.com/originals/b8/11/e1/b811e139855f544c5c534e926f2d001f.jpg"
              alt="Water Feature Garden"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Water Feature Garden!</h2>
            <p>
A water feature garden integrates water elements like fountains or ponds, adding aesthetic appeal and fostering tranquility with aquatic beauty.</p>
          </div>
        </div>
            <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.renefransen.com/images/galleries/arbors/8.jpg"
              alt="Trilliess & airbors  "
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Trilliess & airbors !</h2>
            <p>

            Trellises and arbors are garden structures supporting climbing plants, enhancing aesthetics and providing vertical elements for landscaping and design.</p>
          </div>
        </div>
            {/* card-3 */}
            <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://media.urbanistnetwork.com/saigoneer/article-images/legacy/KF2y8jFh.jpg"
              alt="Bonsai"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bonsai Garden</h2>
            <p>A Bonsai garden features miniature trees in containers, cultivated with precision, patience, and artistry, embodying nature's beauty in compact form.</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://roofgardenbd.com/wp-content/uploads/2023/05/4-1024x576.jpg"
              alt="Flower Garden"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Flower Garden</h2>
            <p>
A flower garden showcases diverse blooms, creating a vibrant and colorful outdoor space that delights the senses and uplifts spirits.</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.pinimg.com/originals/1d/90/33/1d90338f5562d16322efc662847de216.jpg"
              alt="Living Space"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Living Space</h2>
            <p>A living space is a personalized environment, thoughtfully designed and furnished, reflecting one's style and comfort for daily activities and relaxation.</p>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://gardentabs.com/wp-content/uploads/2020/06/A-clean-and-beautiful-rooftop-vegetable-garden-1024x683.jpg"
              alt="Vegetable"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Vegetable Garden</h2>
            <p>A vegetable garden is a cultivated space where edible plants are grown, providing a sustainable source of fresh produce for consumption.

</p>
          </div>
        </div>

           
      </div>
    </div>
  );
}
