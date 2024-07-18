if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    myArr = list(arr)
    maxVal = max(myArr)
    runner_up = min(myArr)
    for ele in myArr :
        if(ele > runner_up and ele != maxVal):
            runner_up = ele
    print(runner_up)
