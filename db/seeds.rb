puts 'seeding'
Course.create({
    name: "Become A Web Developer", 
    videos:[
        {
           name: "Getting started with HTML and CSS", 
           video_url: "https://youtu.be/T367E4I0n74"
          

        },
        {
           name: "React JS:What ypu need to know", 
           video_url: "https://youtu.be/7gMmAaCMAnY"

        },
        {
           name: "Intro to Web Development",
           video_url: "https://youtu.be/-s3InudNIrM"

        },
        {
           name: "Javascript Crush Course",
           video_url: "https://www.youtube.com/watch?v=hdI2bqOjy3c&t=2s" 
         
        },
        {
           name: "How to learn PHP and MySQL",
           video_url: "https://youtu.be/nP-MvFoDVZE" 
          

        },
        {
           name: "Learning Python", 
           video_url: "https://youtu.be/03uyN3WquIc"
         
        },
    ],
    books: [
    {
        title: "Eloquent Javascript",
        category: "Programming",
        author: "Marjin Havaberke",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://eloquentjavascript.net/img/cover.jpg",
     

    },
    {
        title: "Introducing Web Development",
        category: "Programming",
        author: "Jörg Krause",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://learning.oreilly.com/library/cover/9781484224991/250w/",
        

    },
    {
        title: "Web Development In React",
        category: "Programming",
        author: "Mehul Mohan",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/P/9389423597.01.SCLZZZZZZZ_SX500.jpg",
        
    },
    {
        title: "Learn Web Development with Python",
        category: "Programming",
        author: " Fabrizio Romano ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/P/1789953294.01.SCLZZZZZZZ_SX500.jpg",
       

    },
    {
        title: "PHP and MySQL Web Development",
        category: "Programming",
        author: " Luke Welling ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51jl12bYlXL.jpg",
        

    },
    {
        title: "ASP,NET Core 6 and Angular",
        category: "Programming",
        author: "Valerio De Sanctis",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQNyZEJoGLQpk7j40QjylPrTWmULyeYNZE9CS-9ius0mA-NsZhw",
    
    },
    ]
    
})

   # creating for Fashion tips course
Course.create({
    name: "Get Weekly Fashion Tips",
    videos:[
        {
           name: " Styling Hacks To TRANSFORM & UPDATE YOUR STYLE", 
           video_url: "https://youtu.be/fH9AOUyce9Q"
          

        },
        {
           name: "Do's and Don'ts of Styling Trouser", 
           video_url: "https://youtu.be/-dUmQwSksBw"

        },
        {
           name: "Fashion and styling hacks",
           video_url: "https://youtu.be/prxEmD1mFIQ"

        },
        {
           name: "How to layer (and actually look chic) for the COLDEST PLACE ON EARTH",
           video_url: "https://youtu.be/OdHoS0Jsjtg" 
         
        },
        {
           name: "10 Fall Style Mistakes You Are PROBABLY Making!",
           video_url: "https://youtu.be/hQE5_5Sy0h4" 
          

        },
        {
           name: " Easy, Wearable Trends for Everyday ", 
           video_url: "https://youtu.be/cjCtUBL39qc"
         
        },
    ],
    books: [
    {
        title: "Coco Chanel",
        category: "Fashion",
        author: "Meghan Hess",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/P/174379066X.01.SCLZZZZZZZ_SX500.jpg",
       

    },
    {
        title: "Inside Haute Couture: Behind the Scenes at the Paris Ateliers ",
        category: "Fashion",
        author: "Désirée Sadek",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61N5UywZfgL.jpg",
        

    },
    {
        title: "Fashion Victims: The Dangers of Dress Past and Present ",
        category: "Fashion",
        author: "Alison Matthews David",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81bEZTF1czL.jpg",
       

    },
    {
        title: "kate spade new york: all in good taste",
        category: "Fashion",
        author: " kate spade new york ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/P/1419717871.01.SCLZZZZZZZ_SX500.jpg",
        

    },
    {
        title: "The New Black Vanguard",
        category: "Fashion",
        author: "Antwaun Sargent",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81xzAis8AXL.jpg",
        

    },
    {
        title: "Savage Beauty ",
        category: "Fashion",
        author: "Andrew Bolton",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/615K0kFtLdL.jpg",
        

    }
    ]
    
})

 # creating for Social Media Expert course
Course.create({
    name: "Become A Social Media Expert",
    videos:[
        {
           name: "How to Develop a Social Media Strategy Step by Step", 
           video_url: "https://youtu.be/PKUn7wU5sIc"
          
        },
        {
           name: "What exactly does a Social Media Specialist do?", 
           video_url: "https://youtu.be/E3iGXpqvAok"

        },
        {
           name: "How to Become a Social Media Manager: With NO Experience!",
           video_url: "https://youtu.be/kcim9Pl4DcU"

        },
        {
           name: "How to create a content strategy for ANY brand",
           video_url: "https://youtu.be/KWrzzHlPQ7Y" 
         
        },
        {
           name: "DAY IN THE LIFE OF A SOCIAL MEDIA MANAGER | what it's like, tips, and more!",
           video_url: "https://youtu.be/DnjpcgX5sso", 
          

        },
        {
           name: "BEST TOOLS for CREATING and MANAGING social media content ", 
           video_url: "https://youtu.be/5o5k-g-toHg"
         
        },
    ],
    books: [
    {
        title: "Social Media Marketing Workbook",
        category: "Social",
        author: "Jason McDonald",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51T0KDsCKIL.jpg",
        

    },
    {
        title: "Likeable Social Media",
        category: "Social",
        author: "Dave Kerpen",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/P/1260453286.01.SCLZZZZZZZ_SX500.jpg",
        

    },
    {
        title: "One Million Followers",
        category: "Social",
        author: " Brendan Kane ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81ehsrRzP4L.jpg",
        

    },
    {
        title: "YouTube Secrets",
        category: "Fashion",
        author: " Sean Cannell ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61eJn9iRNjL.jpg",
       

    },
    {
        title: "The New Black Vanguard",
        category: "Social",
        author: "Antwaun Sargent",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81xzAis8AXL.jpg",
        

    },
    {
        title: "Platform: The Art and Science of Personal Branding",
        category: "Social",
        author: "Cynthia Johnson ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi nec velit tempus, sit amet auctor odio gravida.",
        image_url: "https://m.media-amazon.com/images/P/0399581375.01.SCLZZZZZZZ_SX500.jpg",
      

    },
    ]
    
})
puts 'Done'