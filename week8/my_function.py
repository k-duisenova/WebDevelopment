def reverse(arr):
    n = len(arr)
    for i in range(0, int(n/2)):
        temp = int(arr[i])
        arr[i] = int(arr[n-i-1])
        arr[n-i-1] = int(temp)
    for m in arr:
        print(m, end=" ")


arr = input().split(" ")
reverse(arr)