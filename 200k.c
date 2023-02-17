#include <stdio.h>
#include <stdlib.h>

int main()
{
   int i,n;

  printf("nhap so cac so\n");
   scanf("%d",&n);
float a[n];
   printf("nhap %d so\n",n);
   for(i=0;i<n;i++){
      printf("a[%d]=",i+1);
       scanf("%f",&a[i]);
   }
 float max=a[0],min=a[0];
    {
     for(i=1;i<=n;i++){
        if(a[i]>max)
            max=a[i];
        if(a[i]<min)
            min=a[i];
        }printf("max=%f\nmin=%f",max,min);
    }
}
