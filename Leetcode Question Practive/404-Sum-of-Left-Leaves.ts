
//   Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val ?? 0)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function sumOfLeftLeaves(root: TreeNode | null): number {
    if (root === null) return 0;
    let sum = 0;
    if (root.left !== null && root.left.left === null && root.left.right === null) sum += root.left.val;
    sum += sumOfLeftLeaves(root.left);
    sum += sumOfLeftLeaves(root.right);
    return sum;
}; 