class Node():
    def __init__(self,value):
        self.data=value
        self.next=None
    

class SingleList():
    def __init__(self):
        self.head=None
       
    def append(self,value):
        newNode=Node(value)
        if not self.head:
            self.head=newNode
            return
        current=self.head
        while current.next:
            current=current.next
        
        current.next=newNode

    def mergeTwoLists(self,list1,list2):
        newNode=Node(0)
        end=newNode

        while list1 and list2:
            if list1.data <list2.data:
                end.next=list1
                list1=list1.next
            else:
                end.next=list2
                list2=list2.next
            end=end.next

        if list1:
            end.next=list1
        elif list2:
            end.next=list2
        
        return newNode.next
    
    def travers(self):
        current=self.head
        while current:
            print(current.data,end='----->')
            current=current.next
        print('Null')        


# First list: 1 -> 3 -> 5
list1 = SingleList()
list1.append(1)
list1.append(2)
list1.append(4)

# Second list: 2 -> 4 -> 6
list2 = SingleList()
list2.append(1)
list2.append(3)
list2.append(4)

# Merge
merged_list = SingleList()
merged_list.head = merged_list.mergeTwoLists(list1.head, list2.head)

# Print result
merged_list.travers()


# -------------------solve on leet code---------------
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1, list2):
        current = ListNode()
        end=current
         

        while list1 and list2:
            if list1.val < list2.val:
                end.next = list1
                list1 = list1.next
            else:
                end.next = list2
                list2 = list2.next
            end = end.next

        if list1:
            end.next = list1
        elif list2:
            end.next = list2

        return current.next
