#include <stdio.h>
#include <math.h>

int bai_1() {
    int a,b,min; 
    scanf("%d%d",&a,&b) ;
    min = (a>b)?b:a ; 
    while(min>=1) {
        if(a%min==0 && b%min==0) {
            return min ; 
        } min-- ; 
    }
}

int bai_2() {
    int a,b,max ; 
    scanf("%d%d",&a,&b) ;
    if( a>b ) { 
        max = a ; 
    }  else { 
        max = b ; 
    }
    while(max<1000) {
        if(max%a==0 && max%b==0) {
            return max ; 
        }
        max++ ; 
    } 
}

int bai_3() {
    float cv ,a=0 ; 
    scanf("%f",&cv) ;
    float ans = cv/4 , max ;
    printf("%f\n",ans) ; 
    max = pow(ans,2) ;
    printf("%f\n",max) ;
    // while(a<=cv/2) {
    //     float b = cv/2 - a ;
    //     if( max < b*a ) max=b*a ;  
    //     a++ ;
    // } 
    return max ; 
}

int main() {
    float ans = bai_3() ;
    printf("%f",ans) ;
}