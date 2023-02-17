#include<stdio.h>

void cau_d() {
    int a[100] , odd[100] , even[100], n , even_count = 0 , odd_count = 0 ; 
    printf("n = ") ; scanf("%d",&n) ;
    for(int i=0;i<n;i++) {
        scanf("%d",&a[i]) ;
        if(a[i]%2==0) {
            even[even_count] = a[i] ; even_count++ ; 
        } else {
            odd[odd_count] = a[i] ; odd_count++ ; 
        }
    } 
    for(int i=0;i<even_count;i++) {
        printf("%d ",even[i]) ;
    }
    printf("\n") ;
    for(int i=0;i<odd_count;i++) {
        printf("%d ",odd[i]) ;
    }
}

int main() {
    cau_d() ;
    return 0 ; 
}