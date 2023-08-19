                    //    leap year
                    let s=parseInt(prompt('Enter the number:'))

                    if(s%4==0&&s%100==0||s%400==0){
                        console.log("leap")
                    }
                    else{
                        console.log("not")
                    }




                    // viowel letters

                    let a="fabevy"
                    let count=0
                    for(i=0;i<a.length;i++){
                        let b=a[i]
                        if(b=="a"||b=="e"||b=="i"||b=="o"||b=="u"){
                            count++
                        }
                    }
                    console.log(count)


                    //  print 100 divided by 3 and 5

                    for(i=0;i<=100;i++){
                        if(i%3==0||i%5==0){
                            console.log("Bizz Buzz")
                        }
                        else if(i%3==0){
                            console.log("bizz")
                        }
                        else if(i%5==0){
                            console.log("Buzz")
                        }
                        else{
                            console.log(i)
                        }
                    }



                    // assending order

                    let a=[3,7,2,1,9,8]

                    for(i=0;i<a.length;i++){
                        for(j=i+1;j<a.length;j++){
                            if(a[i]>a[j]){
                                let s
                                s=a[i]
                                a[i]=a[j]
                                a[j]=s
                            }
                        }
                    }
                    console.log(a)



                    // decending order



                    let des=[3,7,2,1,9,8]

                    for(i=0;i<des.length;i++){
                        for(j=i+1;j<des.length;j++){
                            if(des[i]<des[j]){
                                let s
                                s=des[i]
                                des[i]=des[j]
                                des[j]=s
                            }
                        }
                    }
                    console.log(des)