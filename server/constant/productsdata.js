const products = [
    { 
        id: 'product1',
        url: 'https://images.pexels.com/photos/7298152/pexels-photo-7298152.jpeg?auto=compress&cs=tinysrgb&w=400', 
        detailUrl: 'https://images.pexels.com/photos/7298152/pexels-photo-7298152.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: {
            shortTitle: 'Brown Teddy Bear',
            longTitle: 'Short Fur - Cute Teddy Bear  '
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This Cute Teddy Bear will soon become a travelers best friend, a hostellers companion. Its Size is approx 20cm, covered in brown fur and high-quality stitch.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product2',
        url: 'https://images.pexels.com/photos/7356519/pexels-photo-7356519.jpeg?auto=compress&cs=tinysrgb&w=400', 
        detailUrl: 'https://images.pexels.com/photos/7356519/pexels-photo-7356519.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: {
            shortTitle: 'Brown Mouse',
            longTitle: 'Mouse with cute clothes'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'Meet our adorable brown mouse stuffed toy, dressed in the cutest outfits that will melt your heart. Perfect for cuddling and adding a touch of whimsy to any collection.',
        discount: 'From 99+5% Off', 
        tagline: 'Cute clothes toys' 
    },
    { 
        id: 'product3',
        url: 'https://images.pexels.com/photos/4887163/pexels-photo-4887163.jpeg?auto=compress&cs=tinysrgb&w=400', 
        detailUrl: 'https://images.pexels.com/photos/4887163/pexels-photo-4887163.jpeg?auto=compress&cs=tinysrgb&w=400', 
        title: {
            shortTitle: 'Pink Unicorn',
            longTitle: 'Kawai Unicorn in pink color'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'Our exquisite pink unicorn stuffed toy, is expertly crafted with premium materials for unparalleled softness and adorned with velvety fur. Experience pure joy and comfort with this enchanting companion.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product4',
        url: 'https://m.media-amazon.com/images/I/71clLGkwtcL.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/71clLGkwtcL.jpg',
        title: {
            shortTitle: 'Brown Teddy',
            longTitle: 'Soft Fabric Medium Sized',
        }, 
        price: {
            mrp: 2999,
            cost: 2499,
            discount: '42%'
        },
        description: 'Whether as a comforting bedtime companion or a charming addition to your décor, this brown teddy is sure to bring warmth and joy to your life. Experience the epitome of softness and craftsmanship with this delightful plush toy.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product5',
        url: 'https://images.pexels.com/photos/6134669/pexels-photo-6134669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        detailUrl: 'https://images.pexels.com/photos/6134669/pexels-photo-6134669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        title: {
            shortTitle: 'Kitty and Bunny',
            longTitle: 'A great combination - kitty and bunny'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: 'Discover the adorable world of our kitty and bunny stuffed toy duo. With their delightful expressions and irresistibly soft fur, these cuddly companions are the perfect addition to any collection or gift for animal lovers of all ages',
        discount: 'From ₹1399', 
        tagline: 'Kubra, Nova & more' 
    },
    { 
        id: 'product6',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6bDHTPkEuuIteZ03W0IUk3QldR96rUEXuG59cAU&s',
        detailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6bDHTPkEuuIteZ03W0IUk3QldR96rUEXuG59cAU&s', 
        title: {
            shortTitle: 'Panda',
            longTitle: 'Soft Big Panda'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: 'Embrace the cuteness overload with our panda stuffed toy. With its black and white fur, adorable features, and huggable size, this lovable panda is ready to bring joy and cuddles into your life',
        discount: 'From ₹1399', 
        tagline: 'Kubra, Nova & more' 
    }
]

module.exports = products;