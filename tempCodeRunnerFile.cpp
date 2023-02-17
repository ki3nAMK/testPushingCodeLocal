#include<std.io>

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
}

int main() {
    cau_d() ;
    return 0 ; 
}