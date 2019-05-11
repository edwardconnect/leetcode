#include <iostream>
using namespace std;

class Solution {
public:
    int fib(int N) {
        int current = 0;
        int next = 1;
        for (int index = 0; index < N; ++index) {
            int temp = next + current;
            current = next;
            next = temp;
        }
        return current;
    }
};

int main() {
    Solution solution;
    double input;

    cout << endl << "Please enter a term to calculate the fibonacci number: ";
    cin >> input;

    cout << "Answer is " << solution.fib(input) << endl;
}