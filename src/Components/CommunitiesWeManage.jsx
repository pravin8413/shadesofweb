import React from 'react';

const communities = [
  {
    title: 'Arabian Ranches',
    description: 'Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and',
    imgSrc: 'arabian-ranches.jpg'
  },
  {
    title: 'Arabian Ranches',
    description: 'Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and',
    imgSrc: 'arabian-ranches-ii.jpg'
  },
  {
    title: 'Downtown Dubai',
    description: 'The Centre of Now. The most prestigious square kilometre in the world. Downtown Dubai is no stranger to such accolades, and yet it’s hard to overstate the prominence of this community.',
    imgSrc: 'downtown-dubai.jpg'
  },
  {
    title: 'Dubai Hills EstateI',
    description: 'Sustainably designed, Dubai Hills Estate is a first of its kind destination. This masterfully planned 2,700-acre multi-purpose development will form an integral part of the Mohammed Bin Rashid City.',
    imgSrc: 'dubai-hills-estate.jpg'
  },
  {
    title: 'Dubai Marina',
    description: 'Dubai Marina is one of the world’s largest, most meticulously planned waterfront developments and offers the exhilaration and vibrancy of a chic, urban lifestyle together with all advantages of living on',
    imgSrc: 'dubai-marina.png'
  },
  {
    title: 'Emirates Living',
    description: 'Launched in 2003, Emirates Living is a modern lifestyle community focused on outdoor leisure. Emirates Living offers a serene nature-filled sanctuary, with 8,659 premium villas nestled within 52.2 million.',
    imgSrc: 'emirates-living.jpg'
  }
];

const CommunitiesWeManage = () => {
  return (
    <div className="container">
      <h2 className="text-center my-5">COMMUNITIES WE MANAGE</h2>
      <div className="row">
        {communities.map((community, index) => (
          <div className="col-12 col-md-4 my-4" style={{height:'600px'}} key={index}>
            <div className="card shadow">
              <img src={community.imgSrc} className="card-img-top" alt={community.title} style={{ height: '300px', objectFit: 'cover' }}/>
              <div className="card-body" style={{ textAlign:'left' }}>
                <p className="card-text mt-3">{community.description}</p>
                <h5 className="card-title mt-5">{community.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunitiesWeManage;
