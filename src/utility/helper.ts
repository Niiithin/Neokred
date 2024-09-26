export function getGreeting(date: Date = new Date()): any {
  const hour = date.getHours();

  if (hour >= 5 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good afternoon";
  } else if (hour >= 18 && hour < 24) {
    return "Good evening";
  }
}

export function abbreviateNumber(num: number): string {
  const abbreviations = [
    { value: 1e9, symbol: "B" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "K" },
  ];

  for (const abbreviation of abbreviations) {
    if (Math.abs(num) >= abbreviation.value) {
      const abbreviated = num / abbreviation.value;
      return abbreviated.toFixed(1).replace(/\.0$/, "") + abbreviation.symbol;
    }
  }

  return num.toString();
}

export function formatNumber(number: number): string {
  const numStr = number.toString();
  const lastThreeDigits = numStr.slice(-3); // Get the last three digits
  const otherDigits = numStr.slice(0, -3); // Get the rest of the digits
  if (otherDigits !== "") {
    return (
      otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThreeDigits
    );
  } else {
    return lastThreeDigits;
  }
}
