import React from "react";

const ministries = [
  {
    title: "Children's Department",
    content: `Our Children's Department is dedicated to nurturing the spiritual growth of young hearts in our church community. Through engaging Bible lessons, interactive activities, and creative arts, we aim to instill a deep and lasting love for Christ in our children. We believe that the foundation of faith is laid in childhood, and our team works tirelessly to provide a safe, fun, and enriching environment where children can learn about God's love and develop a strong relationship with Him. Our mission is to guide them as they grow in their understanding of the gospel, helping them build a firm spiritual foundation that will carry them throughout their lives.`,
    image: "/child.png",
  },
  {
    title: "Youth Department",
    content: `The Youth Department plays a crucial role in empowering the next generation to live out their faith with boldness and conviction. We provide a supportive and nurturing community where young people can explore their faith, ask tough questions, and find meaningful connections with peers and mentors. Through Bible studies, worship sessions, and outreach activities, we encourage our youth to deepen their relationship with God and to discover their unique purpose in His kingdom. We are committed to helping them navigate the challenges of life with a Christ-centered perspective, equipping them to be leaders and change-makers in their communities.`,
    image: "/youth.png",
  },
  {
    title: "Men's Fellowship (ஆண்கள் ஐக்கியம்)",
    content: `The Men's Fellowship is a vibrant and dynamic ministry that brings together men of all ages to grow in their faith and build strong, godly relationships. Our fellowship provides a space for men to come together for prayer, Bible study, and mutual support as they strive to live out their calling as leaders in their families, workplaces, and communities. We believe in the importance of accountability and brotherhood, and our gatherings are designed to challenge and encourage each other to pursue a deeper relationship with Christ. Through various activities and events, we seek to equip men to be role models of faith, integrity, and love.`,
    image: "/men.png",
  },
  {
    title: "Women's Fellowship (பெண்கள் ஐக்கியம்)",
    content: `The Women's Fellowship is a place where women of all backgrounds come together to support and uplift one another in their spiritual journeys. Our ministry is focused on empowering women to live purpose-driven lives, rooted in the teachings of Christ. We offer Bible studies, prayer groups, and outreach programs that foster spiritual growth, community, and sisterhood. Our gatherings are a time of encouragement, where women can share their experiences, seek guidance, and find strength in their faith. We are committed to helping each woman discover her God-given gifts and use them to serve her family, church, and community.`,
    image: "https://via.placeholder.com/1280x720",
  },
  {
    title: "Media Department",
    content: `The Media Department is at the forefront of our church's efforts to spread the gospel through modern technology and communication channels. Our team is dedicated to creating and sharing high-quality content that reaches people both within our congregation and beyond. We manage various media platforms, including social media, video production, and live streaming, to ensure that the message of hope and salvation is accessible to a wide audience. By leveraging technology, we strive to engage with our community in meaningful ways, offering spiritual resources and encouraging messages that inspire and uplift. Our goal is to be a beacon of light in the digital world, sharing the love of Christ with as many people as possible.`,
    image: "/media.png",
  },
  {
    title: "Evangelism Department",
    content: `The Evangelism Department is passionate about spreading the good news of Jesus Christ to those who have not yet heard it. We believe in the power of the gospel to transform lives, and we are committed to sharing that message with others. Our ministry organizes outreach programs, community events, and missionary work to reach people in our local community and beyond. We seek to build relationships, offer support, and share the hope that comes from knowing Christ. Through our efforts, we aim to fulfill the Great Commission, bringing the light of the gospel to those in need of God's love and salvation.`,
    image: "/evangelism.png",
  },
  {
    title: "CareCell Department (ஜீவ குழு)",
    content: `The Jeeva Kulu is a vital part of our church, focusing on prayer, fellowship, and spiritual growth. This group provides a supportive environment where members can come together to pray, share their experiences, and encourage one another in their walk with Christ. We believe in the power of collective prayer and the strength that comes from being part of a faith community. Through regular meetings, Bible studies, and group discussions, we seek to deepen our understanding of God's word and apply it to our daily lives. The Jeeva Kulu serves as a lifeline for many, offering spiritual nourishment and a sense of belonging in the body of Christ.`,
    image: "/carecell.png",
  },
  {
    title: "Missionary Department",
    content: `The Missionary Department is dedicated to supporting missionaries and spreading the gospel to unreached areas. Our ministry is committed to fulfilling the Great Commission by sending out and supporting missionaries who are called to share the love of Christ in distant and challenging places. We organize mission trips, provide financial support, and engage in prayer for those who are on the front lines of spreading the gospel. Our goal is to see lives transformed and communities changed by the power of the gospel. We believe that every believer has a role to play in missions, whether through going, giving, or praying, and we encourage our church members to be actively involved in this vital work.`,
    image: "/missionary.png",
  },
  {
    title: "TV Ministry",
    content: `The TV Ministry is a powerful tool that we use to reach a broad audience with the message of hope and salvation. Through television broadcasts, we are able to share the gospel with people who may not be able to attend church in person. Our ministry is committed to producing high-quality programs that are both spiritually enriching and accessible to viewers of all ages. We believe in the importance of using media to spread the word of God and to offer encouragement and inspiration to those who are seeking spiritual guidance. Our TV Ministry is a beacon of hope, reaching into homes and hearts with the life-changing message of Jesus Christ.`,
    image: "https://via.placeholder.com/1280x720",
  },
  {
    title: "Vision Department",
    content: `The Vision Department is responsible for setting and implementing the spiritual and strategic direction of our church. We seek God's guidance in all that we do, and our goal is to align our church's mission and activities with His will. The Vision Department works closely with church leadership to develop and execute plans that will help us grow as a community of faith and reach more people with the gospel. We believe that having a clear and God-centered vision is essential for the health and growth of our church, and we are committed to pursuing that vision with passion and purpose.`,
    image: "/vision.png",
  },
  {
    title: "Church Maintenance",
    content: `The Church Maintenance Department plays a crucial role in ensuring that our place of worship is always welcoming, clean, and well-maintained. Our team works behind the scenes to take care of the church building and grounds, making sure that everything is in good condition for our services and events. We believe that a well-maintained church is a reflection of our respect for God's house, and we are dedicated to keeping our facilities in top condition. Whether it's repairing a broken fixture, cleaning the sanctuary, or maintaining the landscaping, our team takes pride in their work and serves with a heart of humility and dedication.`,
    image: "https://via.placeholder.com/1280x720",
  },
  {
    title: "Charity Department",
    content: `The Charity Department is devoted to serving those in need within our church and the broader community. We believe that showing Christ's love through acts of kindness and generosity is a fundamental part of our Christian walk. Our ministry organizes various charitable activities, including food drives, clothing donations, and financial assistance programs, to support individuals and families who are going through difficult times. We also partner with other organizations to extend our reach and impact. Our goal is to be the hands and feet of Jesus, offering help, hope, and healing to those who need it most.`,
    image: "/charity.png",
  },
  {
    title: "Prayer Department",
    content: `The Prayer Department is the spiritual backbone of our church, dedicated to intercessory prayer and seeking God's will for our community. We believe in the power of prayer to transform lives, bring healing, and strengthen our faith. Our ministry organizes prayer meetings, fasting sessions, and prayer chains to lift up the needs of our church, community, and the world. We encourage all members to be involved in prayer, knowing that it is through prayer that we connect with God and experience His presence and power in our lives. The Prayer Department is committed to fostering a culture of prayer within our church, where everyone feels supported and covered in prayer.`,
    image: "/prayer.png",
  },
  {
    title: "Caring Department",
    content: `The Caring Department is focused on providing support and care to those in our congregation who are in need. Whether it's visiting the sick, comforting the grieving, or offering practical help to those facing challenges, our ministry is there to provide compassionate care. We believe that as a church, we are called to be a family, and that means being there for one another in times of need. Our Caring Department is made up of volunteers who have a heart for service and a deep desire to show Christ's love through acts of kindness and support. We work closely with the pastoral team to ensure that no one in our church family is overlooked or forgotten.`,
    image: "/caring.png",
  },
  {
    title: "Transport Department",
    content: `The Transport Department ensures that everyone has access to our church services and events, regardless of their transportation needs. We provide reliable and safe transportation for members of our congregation who may have difficulty getting to church, including the elderly, those with disabilities, and those without access to a vehicle. Our ministry is committed to removing any barriers that might prevent someone from participating in the life of our church. We believe that everyone should have the opportunity to worship and fellowship together, and our team works diligently to make that possible through our transportation services.`,
    image: "/transport.png",
  },
  {
    title: "Cemetery Garden (கல்லறை தோட்டம்)",
    content: `The Cemetery Garden team is responsible for maintaining the final resting place of our loved ones with dignity and respect. We understand the importance of honoring those who have passed on, and our team takes great care in ensuring that the cemetery is a peaceful and well-maintained space. We believe that the way we care for the cemetery reflects our respect for the memories of those who have gone before us. Our ministry is dedicated to providing a place of solace and reflection for families and friends who visit the gravesites of their loved ones.`,
    image: "/garden.png",
  },
  {
    title: "Banquet Service Ministry (பந்தி விசாரிப்பின் ஊழியம்)",
    content: `The Banquet Service Ministry is dedicated to ensuring that church gatherings and events are well-organized and hospitable. We believe that sharing meals and fellowship is an important part of building community and strengthening relationships within the church. Our team takes care of all aspects of food service, from planning and preparation to serving and cleanup. We strive to create a warm and welcoming atmosphere at every event, where people can enjoy good food and meaningful conversation. Our ministry is committed to serving with excellence and grace, making sure that every detail is taken care of so that our guests can feel at home.`,
    image: "/banquet.png",
  },
  {
    title: "Tour Department",
    content: `The Tour Department organizes church trips and outings that foster fellowship and spiritual growth. We believe that exploring new places and experiencing new cultures together can deepen our relationships with one another and with God. Our ministry plans and coordinates all aspects of these trips, including transportation, accommodation, and activities. Whether it's a pilgrimage to a sacred site, a retreat in nature, or a visit to a historical landmark, our tours are designed to be spiritually enriching and memorable experiences. We aim to create opportunities for our congregation to step out of their daily routines, connect with each other, and grow in their faith.`,
    image: "/tour.png",
  },
];

const OurMinistries = () => {
  return (
    <div className="py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Our Ministries</h1>
      <div className="space-y-16">
        {ministries.map((ministry, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                src={ministry.image}
                alt={ministry.title}
                className="w-full h-auto object-contain max-h-60 md:max-h-80 lg:max-h-96"
              />
            </div>
            <div className="md:w-1/2 p-4 md:pl-8">
              <h2 className="text-2xl font-semibold mb-4">{ministry.title}</h2>
              <p className="text-gray-700">{ministry.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMinistries;
