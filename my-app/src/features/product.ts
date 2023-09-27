import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;

}

interface ProductState {
  products: Product[];
  inputText: string;
}

const initialState: ProductState = {
  products: [
    {
        "id":1,
        "name":"Asus Tuf F17",
        "price":3000,
        "description":"TUF Gaming F17 features up to a 10th Gen Intel® Core™ i7 CPU with 6 cores and 12 threads to tear through serious gaming, streaming, and heavy duty multitasking. Paired with up to a GeForce® GTX 1650 Ti discrete GPU, it can pump out reliably high frame rates in a wide range of games.",
       "imgUrl":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSEyqnLyPgDa-bM3iXvXoTJ77UJzUr0P2gvevBvLd6JFYjvRR5zE62z4_Q0IeBf_hR35qOlXnuPKkoAxj2mPGWP9vLGSZ3FVHkkQu0kNNrFD5iQmR8gLzrT&usqp=CAc"
    },
    {
        "id":2,
        "name":"Asus VivoBook 15 X512DA",
        "price":1799,
        "description":"Laptop ASUS 15.6'' VivoBook 15 X512DA, FHD, Procesor AMD Ryzen™ 5 3500U (4M Cache, up to 3.70 GHz), 8GB DDR4, 512GB SSD, Radeon Vega 8, No OS, Peacock Blue",
       "imgUrl":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQmLMEMLOq4FWRLgI4Wz-ygSb9cxbAbrIivmjVe_eUYsgRAgvev4Oa-zbDPt-IkAfgsYqxz5YLjxM24iaG5pdCIctmnZkPrnJASgnCak9wcgYDchLpCOhQ&usqp=CAc"
    },
    {
        "id":3,
        "name":"Asus Tuf F15",
        "price":4499,
        "description":" F15 features up to a 10th Gen Intel® Core™ i7 CPU with 6 cores and 12 threads to tear through serious gaming, streaming, and heavy duty multitasking. Paired with up to a GeForce® GTX 1660 Ti discrete GPU, it can pump out reliably high frame rates in a wide range of games.",
       "imgUrl":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS8ePdevEjbc6m34_3VP5DgH-vrMsIdK82hG2eNIlqFt0rX6wOrAoMyzroR6JsQFPzRZWSbiH0CdAAgyNhWd2F60MMJnTK4v__sS85fxKmVmbvqHds0bBRl&usqp=CAc"
    },
    {
        "id":4, 
        "name":"Lenovo T480s 14",
        "price":2790,
        "description":"ThinkPad T480s New Options Available Designed for mobile power Light, thin, and built to perform anywhere, the ThinkPad T480s delivers what you need, when you need it. Powerful processing and Dolby® Audio Premium™ take functional efficiency to new heights. In addition, the enhanced security features maintain maximum protection and peace of mind wherever you roam.",
       "imgUrl":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQi6JX2-CICBVVzcfdWnV5vY9_R0aO7Mrwa9EOTyDAfuakDqf_Mc60OI8AnH6Ht9iHe_11m1tY17YAwo7ad3RCu_kX12m6SNWZQtLHuiDJ6BHeqDd1PEoU&usqp=CAc"
    },
    {
        "id":5,
        "name":"ROG Strix G18",
        "price":11999,
        "description":"OG Strix G18 (2023) is a Windows 11 laptop with a 18.00-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i9 processor and it comes with 32GB of RAM. The ROG Strix G18 packs 2TB of SSD storage. Graphics are powered by Nvidia GeForce RTX 4080.",
       "imgUrl":"data:image/jpeg;base64,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"
    },
    {
        "id":6,
        "name":"Alienware M15",
        "price":11999,
        "description":"Crafted for immersive, high-definition gaming, the 15.6 Alienware m15 Gaming Laptop from Dell balances power and portability. It is equipped with a 1920 x 1080 Full HD IPS display that offers 300 cd/m2 brightness, a contrast ratio of 700:1, a refresh rate of 60 Hz, and viewing angles of 170°",
       "imgUrl":"data:image/jpeg;base64,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"
    },
    {
        "id":7,
        "name":"Razer Gaming Blade",
        "price":12497,
        "description":"Razer Blade 16—featuring more graphics power per inch³ than any other 16” gaming laptop1,2. Armed with the world’s first dual-mode mini-LED display, witness quality you can’t unsee with UHD+ 120 Hz and FHD+ 240 Hz native resolutions.",
       "imgUrl":"https://s1.cel.ro/images/Products/2023/02/28/Laptop-Razer-Gaming-15-6-Blade-15-Intel-Core-i7-12800H-16GB-DDR5-1TB-SSD-GeForce-RTX-3060-6GB-Win11-Home-Black-RZ09-0421EED3-R3E1.jpg"
    },
    {
        "id":8,
        "name":"Dell Alienware X16 R1",
        "price":23374,
        "description":"Dell Alienware x16 R1 is a Windows 11 laptop with a 16.00-inch display that has a resolution of 1600x1920 pixels. It is powered by a Core i9 processor and it comes with 16GB of RAM. The Dell Alienware x16 R1 packs 256GB of SSD storage. Graphics are powered by Nvidia GeForce RTX 4090.",
       "imgUrl":"https://s1.cel.ro/images/Products/2023/04/19/Laptop-Dell-Alienware-X16-R1-Intel-Core-i9-13900HK-16inch-RAM-32GB-SSD-1TB-nVidia-GeForce-RTX-4080-12GB-Win11-Pro-Lunar-Silver-AWX16R.jpg"
    }

  ],
  inputText: '', 
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setInputText: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload;
    },

  },
});



export const { setInputText } = productsSlice.actions;
export default productsSlice.reducer;