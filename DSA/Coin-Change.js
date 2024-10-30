

function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity); // Initialize dp array
  dp[0] = 0; // 0 coins are needed to make amount 0

  // Build the dp array
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  // If dp[amount] is still Infinity, return -1 (amount can't be formed)
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Example Usage
const coins = [1, 2, 5];
const amount = 11;
const result = coinChange(coins, amount);

console.log(`Minimum coins needed to make ${amount}: ${result}`);

// Example Output: Minimum coins needed to make 11: 3
