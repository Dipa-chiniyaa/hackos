// Online C compiler to run C program online
#include <stdio.h>
#include<string.h>
#include<stdlib.h>

void main() {
    char s[] = "07:05:45PM";
    int n = strlen(s);
    char period[2];
    char hour[2];
    hour[0] = s[0];
    hour[1]= s[1];
    int h = atoi(hour);
    for(int i = n-2 ; i < n ; i++)
        period[i] = s[i];
}
