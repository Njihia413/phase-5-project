puts 'Seeding user'
user1 = User.create!(username: "julia", email:"julia@gmail.com",password:"zxcvbnm", password_confirmation: "zxcvbnm", role:"teacher") 
user2 = User.create!( username: "leo", email:"leo@gmail.com",password:"zxcvbnm",  password_confirmation:"zxcvbnm", role:"teacher")

puts 'Done seeding users'


puts 'Seeding courses'


## courses for  software engineering 
Course.create!([name: "Become A Web Developer", image_url: "https://media.istockphoto.com/id/1201166649/photo/office-responsive-devices-web-design-website.jpg?s=612x612&w=0&k=20&c=w1zX61Nw0p3aguqUj9FFrUV9hl8l67zut_ZhdnB9p-E=", user_id:1 ])


Video.create([
    {
       name: "Getting started with HTML and CSS",
       video_url: "https://youtube.com/embed/T367E4I0n74",
       course_id: 1
    },
    {
       name: "React JS:What ypu need to know",
       video_url: "https://youtu.be/7gMmAaCMAnY",
       course_id: 1
    },
   {
       name: "Intro to Web Development",
       video_url: "https://youtube.com/embed/-s3InudNIrM",
       course_id:1
    },
    {
       name: "Javascript Crush Course",
       video_url: "https://www.youtube.com/embed/hdI2bqOjy3c",
       course_id:1
    },
    {
       name: "How to learn PHP and MySQL",
       video_url: "https://youtube.com/embed/nP-MvFoDVZE",
       course_id:1
    },
    {
       name: "Learning Python",
       video_url: "https://youtube.com/embed/03uyN3WquIc",
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
       video_url: "https://youtube.com/embed/fH9AOUyce9Q",
       course_id:2
      

    },
    {
       name: "Do's and Don'ts of Styling Trouser", 
       video_url: "https://youtube.com/embed/-dUmQwSksBw",
       course_id:2

    },
    {
       name: "Fashion and styling hacks",
       video_url: "https://youtube.com/embed/prxEmD1mFIQ",
       course_id:2

    },
    {
       name: "How to layer (and actually look chic) for the COLDEST PLACE ON EARTH",
       video_url: "https://youtube.com/embed/OdHoS0Jsjtg",
       course_id:2 
     
    },
    {
       name: "10 Fall Style Mistakes You Are PROBABLY Making!",
       video_url: "https://youtube.com/embed/hQE5_5Sy0h4",
       course_id:2 
      

    },
    {
       name: " Easy, Wearable Trends for Everyday ", 
       video_url: "https://youtube.com/embed./cjCtUBL39qc",
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

 # creating for Social Media Expert course
 Course.create([name: "Become A Social Media Expert",image_url:"https://www.investopedia.com/thmb/8TfyI-FsF3RDSdQPhfM-NkDeWsA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1153397912-5cc5918639d6482b8b1b035413b8c267.jpg", user_id: 1])
    
Video.create!([
       {
          name: "How to Develop a Social Media Strategy Step by Step", 
          video_url: "https://youtube.com/embed/PKUn7wU5sIc",
          course_id:3
         
       },
       {
          name: "What exactly does a Social Media Specialist do?", 
          video_url: "https://youtube.com/embed/E3iGXpqvAok",
          course_id:3

       },
       {
          name: "How to Become a Social Media Manager: With NO Experience!",
          video_url: "https://youtube.com/embed/kcim9Pl4DcU",
          course_id:3

       },
       {
          name: "How to create a content strategy for ANY brand",
          video_url: "https://youtube.com/embed/KWrzzHlPQ7Y",
          course_id:3
        
       },
       {
          name: "DAY IN THE LIFE OF A SOCIAL MEDIA MANAGER | what it's like, tips, and more!",
          video_url: "https://youtube.com/embed/DnjpcgX5sso", 
          course_id:3
         

       },
       {
          name: "BEST TOOLS for CREATING and MANAGING social media content ", 
          video_url: "https://youtube.com/embed/5o5k-g-toHg",
          course_id:3
        
       }
])

Book.create!([
   {
       title: "Social Media Marketing Workbook",
       category: "Social",
       author: "Jason McDonald",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51T0KDsCKIL.jpg",
       course_id:3

   },
   {
       title: "Likeable Social Media",
       category: "Social",
       author: "Dave Kerpen",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/P/1260453286.01._SCLZZZZZZZ_SX500_.jpg",
       course_id:3

   },
   {
       title: "One Million Followers",
       category: "Social",
       author: " Brendan Kane ",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81ehsrRzP4L.jpg",
       course_id:3

   },
   {
       title: "YouTube Secrets",
       category: "Fashion",
       author: " Sean Cannell ",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61eJn9iRNjL.jpg",
       course_id:3

   },
   {
       title: "The New Black Vanguard",
       category: "Social",
       author: "Antwaun Sargent",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81xzAis8AXL.jpg",
       course_id:3

   },
   {
       title: "Platform: The Art and Science of Personal Branding",
       category: "Social",
       author: "Cynthia Johnson ",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/P/0399581375.01._SCLZZZZZZZ_SX500_.jpg",
       course_id:3

   }
])
   
# creating for Logo Design course
Course.create!([name: "Learn Logo Design", image_url: "https://digitaldefynd.com/wp-content/uploads/2018/10/Best-Logo-Design-course-tutorial-class-certification-training-online.jpg", user_id: 1])

Video.create!([
       {
          name: "5 MIND BLOWING Logo Design Tips", 
          video_url: "https://youtube.com/embed/dQjcqEE37jA",
          course_id:4

       },
       {
          name: "The Logo Design Process From Start To Finish", 
          video_url: "https://youtube.com/embed/4MxRhjHmiVw",
          course_id:4

       },
       {
          name: "Guess the Logo Quiz: Food & Drink",
          video_url: "https://youtube.com/embed/GAvmBElQb4M",
          course_id:4

       },
       {
          name: "Making FAMOUS Graphic Designs Better!? ",
          video_url: "https://youtube.com/embed/INMuAYZDums",
          course_id:4 
        
       },
       {
          name: "6 GOLDEN Rules Of Logo Design (Logotype)",
          video_url: "https://youtube.com/embed/eUMjzoiXx-0",
          course_id:4
         

       },
       {
          name: "13 Advanced Logo Design Techniques YOU NEED TO KNOW!", 
          video_url: "https://youtube.com/embed/lyH8PBm8Qfo",
          course_id:4
        
       }
   
])


Book.create!([
   {
       title: "Designing Brand Identity",
       category: "Design",
       author: "Alina Wheeler",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51dEqIi8kLL.jpg",
       course_id:4

   },
   {
       title: "Logo Creed",
       category: "Design",
       author: "Bill Gardner ",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/A1lNZ4rmQzL.jpg",
       course_id:4

   },
   {
       title: "Logo Design Theory",
       category: "Design",
       author: " A Michael Shumate ",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/713uaOyzybL.jpg",
       course_id:4

   },
   {
       title: "Logo",
       category: "Design",
       author: "Michael Evamy ",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41j-d7jGasL.jpg",
       course_id:4

   },
   {
       title: "Logo Modernism",
       category: "Design",
       author: " Jens Müller ",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71hx0KVj3QL.jpg",
       course_id:4

   },
   {
       title: "Logo Design Love",
       category: "Design",
       author: "David Airey",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/P/0321985206.01._SCLZZZZZZZ_SX500_.jpg",
       course_id:4

   }
])
   
# creating for Photography course
Course.create!([name: "3 Weeks Photography Bootcamp",image_url: "https://ask.careers/wp-content/uploads/2019/04/How-to-Choose-the-Right-Photography-Course--1024x768.jpg", user_id: 1])
Video.create!([
       {
          name: "10 NEW Photography Ideas in 100 Seconds", 
          video_url: "https://youtube.com/embed/ineZXLbL7s8",
          course_id: 5
         

       },
       {
          name: "PHOTOGRAPHY BASICS in 10 MINUTES", 
          video_url: "https://youtube.com/embed/V7z7BAZdt2M",
          course_id: 5

       },
       {
          name: "Beginner Photography MISTAKES - What to avoid to take better photos",
          video_url: "https://youtu.be/PW8tr4j1ZWE?list=RDQMYTRC1AAAZns",
          course_id: 5

       },
       {
          name: "Make your PHOTOS & VIDEOS more PROFESSIONAL!",
          video_url: "https://youtube.com/embed/yzbBAkbgfW4",
          course_id: 5
        
       },
       {
          name: "3 Mistakes All Beginner Photographers Make",
          video_url: "https://youtube.com/embed/0q_qfSrTcLI",
          course_id: 5
         

       },
       {
          name: "HOW TO MAKE MONEY WITH PHOTOGRAPHY - Things I wish I knew", 
          video_url: "https://youtube.com/embed/IvZM8GyHFs8",
          course_id: 5
        
       }
])


Book.create!([
   {
       title: "Fast Track Photographer",
       category: "Photography",
       author: "Dane Sanders",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51w9XBxMFgL.jpg",
       course_id: 5
       

   },
   {
       title: "Understanding Exposure",
       category: "Photography",
       author: "Bryan Peterson",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://static.wixstatic.com/media/4a5235_97e4a862aa7347bbb7c22bb765397267~mv2.jpg",
       course_id: 5

   },
   {
       title: "The Photographer's Eye",
       category: "Photography",
       author: "Michael Freeman",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://static.wixstatic.com/media/4a5235_4de8a852801a42a5858fade57998c708~mv2.jpg",
       course_id: 5
   },
   {
       title: "The Art of Photography",
       category: "Photography",
       author: "Bruce Barnbaum",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://static.wixstatic.com/media/4a5235_b185939b440445edaebd479f7622c786~mv2.jpg",
       course_id: 5

   },
   {
       title: "The Digital Photography Book",
       category: "Photography",
       author: "Scott Kelby",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://static.wixstatic.com/media/4a5235_3965fa7952c24709b8f4425f397c3eec~mv2.jpg",
       course_id: 5

   },
   {
       title: "BetterPhoto Basics",
       category: "Photography",
       author: "Jim Miotke",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://static.wixstatic.com/media/4a5235_f527675c01ec4af4b63d767d370a021f~mv2.jpg",
       course_id: 5

   }

])

# creating for Modelling Skills course
Course.create!([name: "Advance Your 3D Modelling Skills", image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Finift.com%2Fcourses%2Fprofessional-modeling-course%2F&psig=AOvVaw1RPRvKA-1pnnX-N4wtCyAb&ust=1673342172925000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNi4ycOTuvwCFQAAAAAdAAAAABAc", user_id: 1])


Video.create!([
       {
          name: "How to improve your 3D modeling skills", 
          video_url: "https://youtube.com/embed/PGutNtvUkCU",
          course_id: 6,
         

       },
       {
          name: "6 key principles for 3D modeling", 
          video_url: "https://youtube.com/embed/OVbIOHAI3iY",
          course_id: 6,

       },
       {
          name: "Clearly Define Details with Loops when 3D Modeling - Blender Beginner Tutorial",
          video_url: "https://youtube.com/embed/iuGuxTzA2kY",
          course_id: 6,

       },
       {
          name: "A 3d Modeling Challenge to Level Up your Skills in Blender",
          video_url: "https://youtube.com/embed/zKsmIqRNvEk",
          course_id: 6, 
        
       },
       {
          name: "The ONLY 5 Modeling Tools You Need To Make ANYTHING in Blender 2.91!",
          video_url: "https://youtube.com/embed/kejQ8nX5YZA" ,
          course_id: 6,
         

       },
       {
          name: "Inventor 2020 Tutorial #94 | 3D Modeling Advanced", 
          video_url: "https://youtube.com/embed/osF5JLjgIOk",
          course_id: 6,
        
       }
])



Book.create!([
   {
       title: "Digital Modeling ",
       category: "Model",
       author: "William Vaughan",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81cGHplufcL.jpg",
       course_id: 6
       

   },
   {
       title: "3D Modeling For Beginners",
       category: "Model",
       author: "Danan Thilakanathan",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51XyAu9ejAL.jpg",
       course_id: 6
       

   },
   {
       title: "Anatomy for 3D Artists",
       category: "Model",
       author: "Chris Legaspi",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51ubGqS6oRL.jpg",
       course_id: 6

   },
   {
       title: "Blender 3D Basics ",
       category: "Model",
       author: "Fisher Gordon",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/P/1849516901.01._SCLZZZZZZZ_SX500_.jpg",
       course_id: 6

   },
   {
       title: "AutoCAD 2017 3D Modeling",
       category: "Model",
       author: "Munir Hamad",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/P/B01M2BSDN9.01._SCLZZZZZZZ_SX500_.jpg",
       course_id: 6

   },
   {
       title: "Essential Skills for 3D Modeling, Rendering, and Animation",
       category: "Model",
       author: "Nicholas Bernhardt Zeman",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/P/1482224127.01._SCLZZZZZZZ_SX500_.jpg",
       course_id: 6

   }

])


# creating for Organization Management course
Course.create!([name: "Learn Organization Management",image_url: "https://miro.medium.com/max/720/1*mxW0p3OkangWjyu4pPzh4Q.webp", user_id: 1])
     
Video.create!([
       {
          name: "Organizational Management", 
          video_url: "https://youtube.com/embed/x7hGc5-XXZo",
          course_id: 7
         

       },
       {
          name: "Management skills ", 
          video_url: "https://youtube.com/embed/xHBhFKBLhWs",
          course_id: 7

       },
       {
          name: "Management Process ",
          video_url: "https://youtube.com/embed/q6LMjurECZM",
          course_id: 7

       },
       {
          name: "Types of Organizational Structure in management",
          video_url: "https://youtube.com/embed/4o6v0XIylzA",
          course_id: 7
        
       },
       {
          name: "Introduction to Management and Organizations (Lecture 1) | P.O.M",
          video_url: "https://youtube.com/embed/JH4srpPMgAc",
          course_id: 7
         

       },
       {
          name: "Organizing Function of Management", 
          video_url: "https://youtube.com/embed/3yVsOSbbPhc",
          course_id: 7
        
       }
])


Book.create!([
   {
       title: "Data-Driven Organization Design",
       category: "Org Management",
       author: "Rupert Morrison",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/P/1398603260.01._SCLZZZZZZZ_SX500_.jpg",
       course_id: 7

   },
   {
       title: "Management and Organization Theory",
       category: "Org Management",
       author: "Jeffrey A. Miles ",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51aZbHO7q1L.jpg",
       course_id: 7

   },
   {
       title: "Managing Change in Organizations",
       category: "Org Management",
       author: "Project Management Institute",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81hvZ2kAM0L.jpg",
       course_id: 7

   },
   {
       title: "Understanding and Managing Public Organizations",
       category: "Org Management",
       author: "Hal G. Rainey",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/P/1119705894.01._SCLZZZZZZZ_SX500_.jpg",
       course_id: 7

   },
   {
       title: "Organizational Behavior: Managing People and Organizations",
       category: "Org Mnagement",
       author: "Ricky W. Griffin",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51UoxLC7bPL.jpg",
       course_id: 7

   },
   {
       title: "Organization and Management Problem Solving",
       category: "Org Management",
       author: " Jr. Ziegenfuss, James T",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51pUhWgRVLL._SY346_.jpg",
       course_id: 7

   }

])


# creating for Designer course
Course.create([ name: "Skills Needed to Become A Designer",image_url:"https://itm.edu/img/itmidm/how-to-make-money-as-a-graphic-designer.webp", user_id: 1])
    
Video.create!([
       {
          name: " Ways to become a Better Designer and to be More Creative", 
          video_url: "https://youtube.com/embed/YHNYaQzsRf8",
          course_id: 8
         

       },
       {
          name: "Simple Tips to IMPROVE your Design", 
          video_url: "https://youtube.com/embed/53zf7pBjCaU",
          course_id: 8

       },
       {
          name: "How To Practice Your Design Skills",
          video_url: "https://youtube.com/embed/NnWabh4pIko",
          course_id: 8

       },
       {
          name: "Most Valuable Skills for Designers",
          video_url: "https://youtube.com/embed/chQm-DLMUs8",
          course_id: 8 
        
       },
       {
          name: " Design Exercises to Improve Skills + Confidence",
          video_url: "https://youtube.com/embed/vzudkGYl0ks",
          course_id: 8 
         

       },
       {
          name: "Product Design Skills", 
          video_url: "https://youtube.com/embed/EfhyU6dulNk",
          course_id: 8
        
       }
])


Book.create!([
   {
       title: "The Design of Everyday Things",
       category: "Designing",
       author: "Don Norman",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://bigthink.com/wp-content/uploads/2018/09/18650802.jpg?fit=1200,675",
       course_id: 8
       

   },
   {
       title: "About Face: The Essentials of Interaction",
       category: "Designing",
       author: "Alan Cooper",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://bigthink.com/wp-content/uploads/2018/09/18650801.jpg?fit=1200,675",
       course_id: 8
   },
   {
       title: "A Product Guide to UX Design",
       category: "Designing",
       author: "Russ Unger",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://bigthink.com/wp-content/uploads/2018/09/18650797.jpg?fit=1200,675",
       course_id: 8

   },
   {
       title: "Universal Principles of Design",
       category: "Designing",
       author: "Kimberly Elam",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://bigthink.com/wp-content/uploads/2018/09/18650794.jpg?fit=1200,675",
       course_id: 8

   },
   {
       title: "A Designer's Art",
       category: "Designing",
       author: "Paul Rand",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://bigthink.com/wp-content/uploads/2018/09/18650800.jpg?fit=1200,675",
       course_id: 8

   },
   {
       title: "Design Elements, Color Fundamentals",
       category: "Designing",
       author: "Aaris Sherin",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://hackr.io/blog/media/design-elements-color-fundamentals-1.jpg",
       course_id: 8
   }

])

# creating for Make-up Artist course
Course.create([name: " 2 in 1 course of Becoming A Makeup Artist", image_url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/makeup-course-flyer-template-design-9ce8947ad8b46d7d30094dec9d713aee_screen.jpg?ts=1610965024", user_id: 1])
     
Video.create!([
       {
          name: "Lisa Eldridge On Becoming A Make-Up Artist", 
          video_url: "https://youtube.com/embed/zPbr-1fVflI",
          course_id: 9
         

       },
       {
          name: "Do Your Makeup Like A PRO! The Secret Tips, Tricks & Hacks You Didn't Know", 
          video_url: "https://youtu.be/virhqj5E9LQ",
          course_id: 9

       },
       {
          name: " MAKEUP MISTAKES TO AVOID!!!",
          video_url: "https://youtube.com/embed/hsuXFCF8qtA",
          course_id: 9

       },
       {
          name: "Makeup Starter Kit for BEGINNERS + How to Use It",
          video_url: "https://youtube.com/embed/d-uvF74Y0s8",
          course_id: 9 
        
       },
       {
          name: "THE BEST EYEBROW TUTORIAL FOR BEGINNERS!! VERY DETAILED",
          video_url: "https://youtube.com/embed/VCZE20foaqE",
          course_id: 9
         

       },
       {
          name: "EXTRA GLAM Makeup Tutorial", 
          video_url: "https://youtube.com/embed/nf8ySuesAPg",
          course_id: 9
        
       }

])


Book.create!([
   {
       title: "How to be a Professional Makeup Artist",
       category: "MUA",
       author: "G M Reyna",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51hNeljE57L.jpg",
       course_id: 9
      

   },
   {
       title: "Makeup Is Art ",
       category: "MUA",
       author: "Jana Ririnui",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://www.cossetmoi.com/wp-content/uploads/2017/03/photo-2-300x252.jpg",
       course_id: 9
       

   },
   {
       title: "Robert Jones' Makeup Masterclass",
       category: "MUA",
       author: "Robert Jones ",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81w91aO0uuL.jpg",
       course_id: 9
       

   },
   {
       title: "Makeup: The Ultimate Guide",
       category: "MUA",
       author: "Rae Morris",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://www.cossetmoi.com/wp-content/uploads/2017/03/41SshuIut7L._SX258_BO1204203200_.jpg",
       course_id: 9
       

   },
   {
       title: "The Beauty of Color",
       category: "MUA",
       author: "Iman",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://www.cossetmoi.com/wp-content/uploads/2017/03/51YLPyYP4TL._SX384_BO1204203200_.jpg",
       course_id: 9
       

   },
   {
       title: "Face Paint: The Story of Makeup ",
       category: "MUA",
       author: "Lisa Eldridge",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://www.cossetmoi.com/wp-content/uploads/2017/03/images-242x300.jpg",
       course_id: 9

   }

])



# creating for Artist course
Course.create([ name: "Embark on the Journey of becoming an Artist", image_url: "https://cdn.conceptartempire.com/images/06/596/aaron-blaise-premium-preview-photo.jpg", user_id: 1])

Video.create!([
       {
          name: "Getting started as an ARTIST ", 
          video_url: "https://www.youtube.com/embed/bhpnb7r9Vw0",
          course_id: 10
         

       },
       {
          name: "Vincent Van Gogh's The Starry Night: Great Art Explained", 
          video_url: "https://youtube.com/embed/wk9L1N9bRRE",
          course_id: 10

       },
       {
          name: "Things EVERY ARTIST Should Avoid Doing",
          video_url: "https://youtube.com/embed/OUme0_vtCtw",
          course_id: 10

       },
       {
          name: "How To Launch Your Art Career",
          video_url: "https://youtube.com/embed/I6mbCPEtX8g",
          course_id: 10 
        
       },
       {
          name: "How I Built My Art Business From Nothing - My Business Strategy and Journey To Being An Illustrator",
          video_url: "https://youtube.com/embed/Gnhxny0STrk",
          course_id: 10
         

       },
       {
          name: "Launching my online ART SHOP + how YOU CAN too ✰ making art prints at home", 
          video_url: "https://youtube.com/embed/ImilY7SE96M",
          course_id: 10
        
       }
])


Book.create!([
   {
       title: "The Artist's Guide: How to Make a Living Doing What You Love",
       category: "Artist",
       author: "Jackie Battenfield",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71MDash37sL.jpg",
       course_id: 10
       

   },
   {
       title: "Fine Art Tips with Lori McNee: Painting Techniques and Professional Advice",
       category: "Artist",
       author: "Lori McNee",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/811p+O4MlQL.jpg",
       course_id: 10

   },
   {
       title: "I'd Rather Be in the Studio: The Artist's No Excuse Guide to Self-Promotion",
       category: "Artist",
       author: "Alyson B. Stanfield",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71fmM8Rj6EL.jpg",
       course_id: 10

   },
   {
       title: "How to Profit from the Art Print Market 2nd Edition: Creating Cash Flow from Original Art",
       category: "Artist",
       author: "Mr Barney Davey ",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/I/51aPa8WhykL.jpg",
       course_id: 10

   },
   {
       title: "Arts & Numbers: A Financial Guide for Artists",
       category: "Artist",
       author: "Elaine Grogan Luttrull",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71xTKp110bL.jpg",
       course_id: 10

   },
   {
       title: "The Artist's Guide to Grant Writing",
       category: "Artist",
       author: "Gigi Rosenberg",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91zYHsJ5Z+L.jpg",
       course_id: 10

   }

])

# creating for Growing Relationships course
Course.create([name: "The Art of Growing Relationships", image_url: "https://www.theaccessgroup.com/media/1vroptyn/relationship-building.png?anchor=center&mode=crop&width=820&height=460&rnd=132899282306300000", user_id: 1])

     
Video.create!([
       {
          name: "How to Grow Within a Relationship : Psychology & Mental Health", 
          video_url: "https://youtube.com/embed/UlGJ0dm19SU",
          course_id: 11
         

       },
       {
          name: "How to Improve Your Relationship", 
          video_url: "https://youtube.com/embed/rNVtxTwd9zc",
          course_id: 11

       },
       {
          name: "Behaviors That Destroy Relationships",
          video_url: "https://youtube.com/embed/AikTYbk0iXk",
          course_id: 11

       },
       {
          name: "Advice for Strong Relationships from Jordan Peterson",
          video_url: "https://youtube.com/embed/n-SVPsGMPi8",
          course_id: 11 
        
       },
       {
          name: "Jordan Peterson: Fixing relationships",
          video_url: "https://youtube.com/embed/Yii6JBGWHms",
          course_id: 11
         

       },
       {
          name: "Skills for Healthy Romantic Relationships", 
          video_url: "https://youtube.com/embed/gh5VhaicC6g",
          course_id: 11
        
       }
])


Book.create!([
   {
       title: "Attached",
       category: "Relationships",
       author: " Amir Levine",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://media.self.com/photos/5f57e00297d45dbf4b2612f8/master/w_1920%2Cc_limit/Pattached.png",
       course_id: 11
      

   },
   {
       title: "Not Nice",
       category: "Relationships",
       author: " Dr Aziz Gazipura",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/P/098897987X.01._SCLZZZZZZZ_SX500_.jpg",
       course_id: 11
       

   },
   {
       title: "Big Friendship",
       category: "Relationships",
       author: "Aminatou Sow",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://media.self.com/photos/5f57cda29e0bccbfba9b52ac/master/w_1920%2Cc_limit/Big%2520Friendship.jpg",
       course_id: 11
       

   },
   {
       title: "The Enneagram in Love ",
       category: "Relationships",
       author: "Stephanie Barron Hall",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://media.self.com/photos/5f57d17d956d4ce19c85696b/master/w_1920%2Cc_limit/The%2520Enneagram%2520in%2520Love.jpg",
       course_id: 11
      
   },
   {
       title: "How to Be an Adult in Relationships ",
       category: "Relationships",
       author: "David Richo",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://media.self.com/photos/5f57d3a797d45dbf4b2612e1/master/w_1920%2Cc_limit/How%2520to%2520Be%2520an%2520Adult%2520in%2520Relationships.jpg",
       course_id: 11
       

   },
   {
       title: "Frientimacy",
       category: "Relationships",
       author: "Shasta Nelson",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://media.self.com/photos/5f57db5d97d45dbf4b2612f6/master/w_1920%2Cc_limit/Frientimacy.jpg",
       course_id: 11
       

   }

])

# creating for Music course
Course.create([ name: "Having A Good Listening Ear To Good Music", image_url: "https://news.ubc.ca/wp-content/uploads/2019/06/shutterstock_198925616-1024x683.jpg", user_id: 1])
     
Video.create!([
       {
          name: "Benefits of Listening to Music | Tips For Life ESL", 
          video_url: "https://youtube.com/embed/N7n_wIPXvLE",
          course_id: 12
         

       },
       {
          name: "Learn music theory in half an hour.", 
          video_url: "https://youtube.com/embed/rgaTLrZGlk0",
          course_id: 12

       },
       {
          name: "Calm Your Anxiety",
          video_url: "https://youtube.com/embed/zPyg4N7bcHM",
          course_id: 12
          

       },
       {
          name: "✏️ a lofi hip hop playlist to help you study for finals! 📚",
          video_url: "https://youtube.com/embed/vWwewNiEL_Y",
          course_id: 12
          
           
         
        
       },
       {
          name: "POV: You finally came home after a hard day.",
          video_url: "https://youtube.com/embed/DSKcEsfdQm0",
          course_id: 12
           
         

       },
       {
          name: "Pov: You Choose to Be Happy | Mood Boost Playlist", 
          video_url: "https://youtube.com/embed/fI_f7HOixNQ",
          course_id: 12
         
       }
        
])


Book.create!([
   {
       title: "How to Listen to Great Music",
       category: "Music",
       author: "Robert Greenberg",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81lAWwi7EdL.jpg",
       course_id: 12
          
      

   },
   {
       title: "Inside Music",
       category: "Music",
       author: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/910elZzlSkL.jpg",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://m.media-amazon.com/images/P/098897987X.01._SCLZZZZZZZ_SX500_.jpg",
       course_id: 12
          
       

   },
   {
       title: "This Is Your Brain on Music",
       category: "Music",
       author: "Daniel J. Levitin",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://images4.penguinrandomhouse.com/cover/9780452288522",
       course_id: 12
          
       

   },
   {
       title: "Absolutely on Music",
       category: "Music",
       author: "Haruki Murakami",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://images4.penguinrandomhouse.com/cover/9780804173728",
       course_id: 12
          
       

   },
   {
       title: "Decoded",
       category: "Music",
       author: "Jay Z",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://images1.penguinrandomhouse.com/cover/9780812981155",
       course_id: 12
          

   },
   {
       title: "Musicophilia",
       category: "Music",
       author: "Oliver Sacks",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
       image_url: "https://images3.penguinrandomhouse.com/cover/9781400033539",
       course_id: 12
          
   }
])


puts 'ending'




    
    

puts 'Seeding Assessments'



Assessment.create!([user_id: 1, assessment_name: "Logo Design Quiz",date: "April 20, 2022"])

Question.create!([
          {
            question: "What is the most important thing to consider when designing a logo?",
            choices: [
                "The color scheme",
                "The font",
                "The size of the logo",
                "The amount of detail in the design"
            ],
            answer: "The color scheme",
            assessment_id:1
          },
          {
            question: "How many colors should a logo typically have?",
            choices: [
              "As many as possible",
              "Two or three",
              "One",
              "It doesn't matter"
            ],
            answer: "Two or three",
            assessment_id:1
          },
          {
            question: "What is the purpose of a logo?",
            choices: [
              "To make a business look professional",
              "To stand out from competitors",
              "To convey the brand's message and values",
              "To be visually appealing"
            ],
            answer: "To convey the brand's message and values",
            assessment_id:1
          },
          {
            question: "How can you ensure that a logo is effective?",
            choices: [
              "By following design trends",
              "By making it as simple as possible",
              "By adding as much detail as possible",
              "By using bright, bold colors"
            ],
            answer: "By making it as simple as possible",
            assessment_id:1
          }
                   
])

Assessment.create!([user_id: 1,assessment_name: "3D Modelling Quiz",date: "July 20, 2022"])
Question.create!([
          {
            question: "What is UV mapping in 3D modeling?",
            choices: [
                "A technique for creating the texture of an object",
                "A technique for creating the shape of an object",
                "A technique for creating the lighting of an object",
                "A technique for creating the shading of an object"
            ],
            answer: "A technique for creating the texture of an object",
            assessment_id: 2
          },
          {
            question: "What is the purpose of using a reference image in 3D modeling?",
            choices: [
              "To use as a texture for the model",
              "To use as a guide for the shape of the model",
              "To use as a guide for the lighting of the model",
              "To use as a guide for the shading of the model"
            ],
            answer: "To use as a guide for the shape of the model",
            assessment_id: 2
          },
          {
            question: "What is subdivision modeling in 3D modeling?",
            choices: [
              "A technique for creating the texture of an object",
              "A technique for creating the shape of an object",
              "A technique for creating the lighting of an object",
              "A technique for creating the shading of an object"
            ],
            answer: "A technique for creating the shape of an object",
            assessment_id: 2
          },
          {
            question: "What is the purpose of using a cage in 3D modeling?",
            choices: [
              "To create a 3D model from a 2D image",
              "To add detail to a 3D model",
              "To add shading to a 3D model",
              "To add lighting to a 3D model"
            ],
            answer: "To add detail to a 3D model",
            assessment_id: 2
          }
        
        
      
])

Assessment.create!([ user_id: 1,assessment_name: "Organization Mangement Quiz",date: "May 20, 2022"])
Question.create!([
          {
            question: "What is the main goal of an organization?",
            choices: [
                "To make a profit",
                "To provide good customer service",
                "To hire the best employees",
                "To have a strong corporate culture"
            ],
            answer: "To make a profit",
            assessment_id: 3
          },
          {
            question: "What is a mission statement in an organization?",
            choices: [
              "A statement outlining the company's goals and values",
              "A statement outlining the company's policies",
              "A statement outlining the company's products or services",
              "A statement outlining the company's market position"
            ],
            answer: "A statement outlining the company's goals and values",
            assessment_id: 3
          },
          {
            question: "What is a vision statement in an organization?",
            choices: [
              "A statement outlining the company's goals and values",
              "A statement outlining the company's policies",
              "A statement outlining the company's products or services",
              "A statement outlining the company's market position"
            ],
            answer: "A statement outlining the company's policies ",
            assessment_id: 3
          },
          {
            question: "What is the main function of a human resources department in an organization?",
            choices: [
              "To manage the company's finances",
              "To manage the company's marketing efforts",
              "To manage the company's operations",
              "To manage the company's employees"
            ],
            answer: "To manage the company's employees",
            assessment_id: 3
          }      
])

Assessment.create([ user_id: 1,assessment_name: "Photography Quiz",date: "May 2, 2022"])
Question.create!([
          {
            question: "What is aperture in photography?",
            choices: [
                "The size of the lens opening",
                "The size of the camera sensor",
                "The speed at which the camera captures light",
                "The amount of light in a scene"
            ],
            answer: "The size of the lens opening",
            assessment_id: 4
          },
          {
            question: "What is the purpose of using a tripod in photography?",
            choices: [
              "To increase the depth of field",
              "To stabilize the camera",
              "To increase the shutter speed",
              "To decrease the aperture"
            ],
            answer: "To stabilize the camera",
            assessment_id: 4
          },
          {
            question: "What is the 'golden hour' in photography?",
            choices: [
              "The time of day when the light is the most flattering",
              "The time of day when the sun is directly overhead",
              "The time of day when the sun is setting",
              "The time of day when the sky is the clearest"
            ],
            answer: "The time of day when the light is the most flattering",
            assessment_id: 4
          },
          {
            question: "What is the purpose of using a polarizing filter in photography?",
            choices: [
              "To increase the depth of field",
              "To decrease the shutter speed",
              "To reduce reflections and increase contrast",
              "To increase the aperture"
            ],
            answer: "To reduce reflections and increase contrast",
            assessment_id: 4
          }
        
        
      
])

Assessment.create!([user_id: 1, assessment_name: "Designer Quiz",date: "August 20, 2022"])
Question.create!([
          {
            question: "What is the design process and why is it important?",
            choices: [
                "The design process is the series of steps that designers follow when creating a new product or solution. It is important because it helps designers to think critically and systematically about their ideas, and to identify and solve problems in an organized way.",
                "The design process is the series of steps that designers follow when creating a new product or solution. It is important because it helps designers to think creatively and spontaneously, and to come up with new ideas quickly.",
                "The design process is the series of steps that designers follow when creating a new product or solution. It is important because it helps designers to think creatively and systematically, and to identify and solve problems in an organized way."
                
            ],
            answer: "The design process is the series of steps that designers follow when creating a new product or solution. It is important because it helps designers to think creatively and spontaneously, and to come up with new ideas quickly.",
            assessment_id: 5
          },
          {
            question: "What are some common design tools and software programs that are used in the industry?",
            choices: [
              "Photoshop, Illustrator, and InDesign",
              "Excel, PowerPoint, and Word",
              "Photoshop, AutoCAD, and SketchUp"
            ],
            answer: "Photoshop, Illustrator, and InDesign",
            assessment_id: 5
          },
          {
            question: "What are some key considerations for designing for different audiences and contexts?",
            choices: [
              "The age, gender, and cultural background of the audience",
              "The purpose of the design and the message being communicated",
              "Both A and B"
              
            ],
            answer: "Both A and B",
            assessment_id: 5
          }
])

Assessment.create!([user_id: 1,assessment_name: "Makeup Artistry Quiz", date: "November 2, 2022"])
Question.create!([
          {
            question: "What is the main purpose of using foundation in makeup?",
            choices: [
                "To cover up blemishes and imperfections",
                "To add color to the face",
                "To add shine to the face",
                "To add texture to the face"
            ],
            answer: "To cover up blemishes and imperfections",
            assessment_id: 6
          },
          {
            question: "What is the main purpose of using highlighter in makeup?",
            choices: [
              "To cover up blemishes and imperfections",
              "To add color to the face",
              "To add shine to the face",
              "To add texture to the face"
            ],
            answer: "To add shine to the face",
            assessment_id: 6
          },
          {
            question: "What is the main purpose of using blush in makeup?",
            choices: [
              "To cover up blemishes and imperfections",
              "To add color to the face",
              "To add shine to the face",
              "To add texture to the face"
            ],
            answer: "To add color to the face",
            assessment_id: 6
          },
          {
            question: "What is the main purpose of using contour in makeup?",
            choices: [
              "To cover up blemishes and imperfections",
              "To add color to the face",
              "To add shine to the face",
              "To define and shape the face"
            ],
            answer: "To define and shape the face",
            assessment_id: 6
          }     
])


Assessment.create!([user_id: 1,assessment_name: "Artistry Quiz",date: "October 2, 2022"])
Question.create!([
          {
            question: "What is the main purpose of using line in art?",
            choices: [
                "To add texture to the artwork",
                "To add color to the artwork",
                "To add depth to the artwork",
                "To add movement to the artwork"
            ],
            answer: "To add texture to the artwork ",
            assessment_id: 7
          },
          {
            question: "What is the main purpose of using shape in art?",
            choices: [
              "To add texture to the artwork",
              "To add color to the artwork",
              "To add depth to the artwork",
              "To define the composition of the artwork"
            ],
            answer: "To define the composition of the artwork ",
            assessment_id: 7
          },
          {
            question: "What is the main purpose of using color in art?",
            choices: [
              "add texture to the artwork",
              "To add emotion to the artwork",
              "To add depth to the artwork",
              "To add movement to the artwork"
            ],
            answer: "To add emotion to the artwork",
            assessment_id: 7
          },
          {
            question: "What is the main purpose of using texture in art?",
            choices: [
              "To add dimension to the artwork",
              "To add emotion to the artwork",
              "To add depth to the artwork",
              "To add movement to the artwork"
            ],
            answer: "To add dimension to the artwork",
            assessment_id: 7
          },
        
        
      
])

Assessment.create([user_id: 1,assessment_name: "Growth in Relationship Quiz",date: "June 2, 2023"])
Question.create!([
          {
            question: "What is the main purpose of setting goals in a relationship?",
            choices: [
                "To keep the relationship fresh and exciting",
                "To keep the relationship stable and predictable",
                "To keep the relationship one-sided",
                "To keep the relationship distant"
            ],
            answer: "To keep the relationship fresh and exciting",
            assessment_id: 8
          },
          {
            question: "What is the main purpose of having open and honest communication in a relationship?",
            choices: [
              "To create tension and conflict",
              "To keep secrets and hide feelings",
              "To maintain a sense of mystery",
              "To build trust and understanding"
            ],
            answer: "To build trust and understanding",
            assessment_id: 8
          },
          {
            question: "What is the main purpose of supporting each other's growth and development in a relationship?",
            choices: [
              "To foster dependence and co-dependence",
              "To foster independence and distance",
              "To foster a sense of competition",
              "To foster a sense of insecurity"
            ],
            answer: "To foster independence and distance",
            assessment_id: 8
          },
          {
            question: "What is the main purpose of compromising and compromising in a relationship?",
            choices: [
              "To maintain a sense of equality and balance",
              "To maintain a sense of superiority and inferiority",
              "To maintain a sense of control and power ",
              "To maintain a sense of resentment and resentment"
            ],
            answer: "To maintain a sense of control and power ",
            assessment_id: 8
          }     
])


Assessment.create!([user_id: 1,assessment_name: "Musical Quiz",date: "July 2, 2023"])
Question.create!([
          {
            question: "What is the musical term for the repetition of a short musical phrase or motive?",
            choices: [
                "Motif",
                "Theme",
                "Melody",
                "Harmony"
            ],
            answer: "Motif",
            assessment_id: 9
          },
          {
            question: "What is the musical term for the distance between two notes in pitch?",
            choices: [
              "Interval ",
              "Scale",
              "Chord",
              "Harmony"
            ],
            answer: "Interval",
            assessment_id: 9
          },
          {
            question: "What is the musical term for the structure of a piece of music, including the number of sections and the number and length of each section?",
            choices: [
              "Form",
              "Melody",
              "Harmony",
              "Rhythm"
            ],
            answer: "Form",
            assessment_id: 9
          },
          {
            question: "What is the musical term for the speed or tempo of a piece of music?",
            choices: [
              "Rhythm",
              "Beat",
              "Melody",
              "Harmony"
            ],
            answer: "Beat",
            assessment_id: 9
          }
        
        
      
])
puts 'Done Assessment'


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
