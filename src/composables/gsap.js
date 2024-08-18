import { gsap }  from 'gsap';

export const headerGsap = ()=>{

    const element = document.querySelector('.sec1Header');

    const intersection = new IntersectionObserver((items)=>{
        items.forEach(entry=>{
            if(entry.isIntersecting){
                gsap.set(element, {
                    y: -100,
                    opacity: 0
                });
            
                gsap.to(element, {
                    duration: 1,
                    y: 0,
                    opacity: 1,
                    ease: "power2.out"
                });
                
            }
        })
    });

    intersection.observe(element)
}

export const joinBtn = ()=>{
    const element = document.querySelector('.joinBtn');

    const intersection = new IntersectionObserver((items)=>{
        items.forEach(entry=>{
            if(entry.isIntersecting){
                gsap.set(element, {
                    x: -100,
                    opacity: 0
                });
            
                gsap.to(element, {
                    duration: 1,
                    x: 0,
                    opacity: 1,
                    ease: "power2.out"
                });
                
            }
        })
    });

    intersection.observe(element)

}

export const cubeGsap = ()=>{
    const element = document.querySelector('.entireCube');

    const intersection = new IntersectionObserver((items)=>{
        items.forEach(entry=>{
            if(entry.isIntersecting){
                gsap.set(element, {
                    x: 100,
                    opacity: 0
                });
            
                gsap.to(element, {
                    duration: 1,
                    x: 0,
                    opacity: 1,
                    ease: "power2.out"
                });
                
            }
        })
    });

    intersection.observe(element)

}

export const descCubeGsap = ()=>{
    const element = document.querySelector('.cubeDesc');

    const intersection = new IntersectionObserver((items)=>{
        items.forEach(entry=>{
            if(entry.isIntersecting){
                gsap.set(element, {
                    x: -100,
                    opacity: 0
                });
            
                gsap.to(element, {
                    duration: 1,
                    x: 0,
                    opacity: 1,
                    ease: "power2.out"
                });
                
            }
        })
    });

    intersection.observe(element)

}

export const newsCard1 = ()=>{
    const element = document.querySelector('.card1');

    const intersection = new IntersectionObserver((items)=>{
        items.forEach(entry=>{
            if(entry.isIntersecting){
                gsap.set(element, {
                    x: 300,
                    opacity: 0
                });
            
                gsap.to(element, {
                    duration: 1,
                    x: 0,
                    opacity: 1,
                    ease: "power2.out"
                });
                
            }
        })
    });

    intersection.observe(element)

}

export const newsCard2 = ()=>{
    const element = document.querySelector('.card2');

    const intersection = new IntersectionObserver((items)=>{
        items.forEach(entry=>{
            if(entry.isIntersecting){
                gsap.set(element, {
                    x: 700,
                    opacity: 0
                });
            
                gsap.to(element, {
                    duration: 1,
                    x: 0,
                    opacity: 1,
                    ease: "power2.out"
                });
                
            }
        })
    });

    intersection.observe(element)

}

export const leftBoxGsap = ()=>{
    const element = document.querySelector('.leftCard');

    const intersection = new IntersectionObserver((items)=>{
        items.forEach(entry=>{
            if(entry.isIntersecting){
                gsap.set(element, {
                    y: 700,
                    opacity: 0
                });
            
                gsap.to(element, {
                    duration: 1,
                    y: 0,
                    opacity: 1,
                    ease: "power2.out"
                });
                
            }
        })
    });

    intersection.observe(element)

}