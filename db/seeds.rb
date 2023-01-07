
puts 'seeding user'
user1 = User.create!(username: "julia", email:"julia@gmail.com",password:"zxcvbnm", password_confirmation: "zxcvbnm", role:"teacher") 
user2 = User.create!( username: "leo", email:"leo@gmail.com",password:"zxcvbnm",  password_confirmation:"zxcvbnm", role:"teacher")

puts 'Done'


puts 'seeding course'


## courses for  software engineering 
Course.create!([name: "Become A Web Developer", image_url: "https://media.istockphoto.com/id/1201166649/photo/office-responsive-devices-web-design-website.jpg?s=612x612&w=0&k=20&c=w1zX61Nw0p3aguqUj9FFrUV9hl8l67zut_ZhdnB9p-E=", user_id:1 ])


Video.create([
    {
       name: "Getting started with HTML and CSS",
       video_url: "https://youtu.be/T367E4I0n74",
       course_id: 1
    },
    {
       name: "React JS:What ypu need to know",
       video_url: "https://youtu.be/7gMmAaCMAnY",
       course_id: 1
    },
   {
       name: "Intro to Web Development",
       video_url: "https://youtu.be/-s3InudNIrM",
       course_id:1
    },
    {
       name: "Javascript Crush Course",
       video_url: "https://www.youtube.com/watch?v=hdI2bqOjy3c&t=2s",
       course_id:1
    },
    {
       name: "How to learn PHP and MySQL",
       video_url: "https://youtu.be/nP-MvFoDVZE",
       course_id:1
    },
    {
       name: "Learning Python",
       video_url: "https://youtu.be/03uyN3WquIc",
       course_id: 1
    }
  ])
  Book.create([
    ({
        title: "Eloquent Javascript",
        category: "Programming",
        author: "Marjin Havaberke",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://eloquentjavascript.net/img/cover.jpg",
        course_id: 1
    }),
    ({
        title: "Introducing Web Development",
        category: "Programming",
        author: "Jörg Krause",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://learning.oreilly.com/library/cover/9781484224991/250w/",
        course_id: 1
    }),
    ({
        title: "Web Development In React",
        category: "Programming",
        author: "Mehul Mohan",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/P/9389423597.01.SCLZZZZZZZ_SX500.jpg",
        course_id: 1
    }),
    {
        title: "Learn Web Development with Python",
        category: "Programming",
        author: " Fabrizio Romano ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/P/1789953294.01.SCLZZZZZZZ_SX500.jpg",
        course_id: 1
    },
    ({
        title: "PHP and MySQL Web Development",
        category: "Programming",
        author: " Luke Welling ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51jl12bYlXL.jpg",
        course_id: 1
    }),
    ({
        title: "ASP,NET Core 6 and Angular",
        category: "Programming",
        author: "Valerio De Sanctis",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQNyZEJoGLQpk7j40QjylPrTWmULyeYNZE9CS-9ius0mA-NsZhw",
        course_id: 1
    }),
    ])
  

# creating for Fashion tips course
Course.create!([name: "Get Weekly Fashion Tips",image_url:"https://media.istockphoto.com/id/921284684/photo/female-fashion-designer.jpg?s=612x612&w=0&k=20&c=E9KdsoHJG3Yg_cuBi57oZ4QC4khJayaT8x9VYxeOG_o=", user_id: 1])

Video.create([
    {
       name: " Styling Hacks To TRANSFORM & UPDATE YOUR STYLE", 
       video_url: "https://youtu.be/fH9AOUyce9Q",
       course_id:2
      

    },
    {
       name: "Do's and Don'ts of Styling Trouser", 
       video_url: "https://youtu.be/-dUmQwSksBw",
       course_id:2

    },
    {
       name: "Fashion and styling hacks",
       video_url: "https://youtu.be/prxEmD1mFIQ",
       course_id:2

    },
    {
       name: "How to layer (and actually look chic) for the COLDEST PLACE ON EARTH",
       video_url: "https://youtu.be/OdHoS0Jsjtg",
       course_id:2 
     
    },
    {
       name: "10 Fall Style Mistakes You Are PROBABLY Making!",
       video_url: "https://youtu.be/hQE5_5Sy0h4",
       course_id:2 
      

    },
    {
       name: " Easy, Wearable Trends for Everyday ", 
       video_url: "https://youtu.be/cjCtUBL39qc",
       course_id:2
     
    },
])

Book.create([
{
    title: "Coco Chanel",
    category: "Fashion",
    author: "Meghan Hess",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
    image_url: "https://m.media-amazon.com/images/P/174379066X.01.SCLZZZZZZZ_SX500.jpg",
    course_id:2
   

},
{
    title: "Inside Haute Couture: Behind the Scenes at the Paris Ateliers ",
    category: "Fashion",
    author: "Désirée Sadek",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
    image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61N5UywZfgL.jpg",
    course_id:2
    

},
{
    title: "Fashion Victims: The Dangers of Dress Past and Present ",
    category: "Fashion",
    author: "Alison Matthews David",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
    image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81bEZTF1czL.jpg",
    course_id:2
   

},
{
    title: "kate spade new york: all in good taste",
    category: "Fashion",
    author: " kate spade new york ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
    image_url: "https://m.media-amazon.com/images/P/1419717871.01.SCLZZZZZZZ_SX500.jpg",
    course_id:2
    

},
{
    title: "The New Black Vanguard",
    category: "Fashion",
    author: "Antwaun Sargent",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
    image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81xzAis8AXL.jpg",
    course_id:2
    

},
{
    title: "Savage Beauty ",
    category: "Fashion",
    author: "Andrew Bolton",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
    image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/615K0kFtLdL.jpg",
    course_id:2
    

}
])

puts 'ending'


puts 'Seeding Reviews'

Review.create!([
    {   book_id: 1,
       rating: 4,
       description: "This course was really helpful in understanding the material. The instructor was clear and engaging, and the course materials were well organized. I would definitely recommend this course to others." 

    },

    {
       book_id: 12,
       rating: 3,
       description: "The course content was interesting, but the instructor could have been more engaging. The course materials were a bit confusing at times, but overall I learned a lot."
    },

    {
      
       book_id: 7,
       rating: 5,
       description: "I absolutely loved this course! The instructor was knowledgeable and entertaining, and the course materials were easy to follow. I learned so much and would definitely take another course with this instructor."
    },

    {
       
       book_id: 5,
       rating: 2,
       description: "This course was a disappointment. The instructor was hard to understand and the course materials were poorly organized. I didn't feel like I learned much from this course."
    },

    {
      
       book_id: 4,
       rating: 4,
       description: "The course content was good, but the instructor could have been more engaging. The course materials were well organized and easy to follow. Overall, I feel like I learned a lot from this course."
    },

    {
       
       book_id: 7,
       rating: 5,
       description: "Awesome experience....'ve learnt alot and gotten more knowledge than I had before"
    }
])

puts 'Done'

