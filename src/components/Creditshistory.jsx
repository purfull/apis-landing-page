import React from "react";
import { Button } from "./ui/button";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const CreditsHistory = () => {
  // Dummy transaction data
  const transactions = [
    {
      date: "Nov 3, 2025",
      description: "API Request - Email Verification",
      type: "deduct",
      credits: 50,
      balance: 3550,
    },
    {
      date: "Nov 2, 2025",
      description: "Credits Purchase",
      type: "add",
      credits: 1000,
      balance: 3600,
    },
    {
      date: "Oct 30, 2025",
      description: "Referral Bonus",
      type: "add",
      credits: 200,
      balance: 2600,
    },
    {
      date: "Oct 29, 2025",
      description: "API Request - SMS Gateway",
      type: "deduct",
      credits: 100,
      balance: 2400,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Credits{" "}
            <span className="bg-gradient-primary from-primary to-accent bg-clip-text text-transparent">
              History
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor your credit usage, purchases, and rewards in real time.
            Transparency made simple.
          </p>
        </div>

        {/* Credits Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-xl shadow-md border border-border text-center">
            <h3 className="text-sm text-muted-foreground">Total Credits</h3>
            <p className="text-3xl font-semibold text-primary mt-2">10,000</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-md border border-border text-center">
            <h3 className="text-sm text-muted-foreground">Used Credits</h3>
            <p className="text-3xl font-semibold text-red-500 mt-2">6,450</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-md border border-border text-center">
            <h3 className="text-sm text-muted-foreground">Remaining</h3>
            <p className="text-3xl font-semibold text-green-500 mt-2">3,550</p>
          </div>
        </div>

        {/* Transaction History Table */}
        <div className="overflow-x-auto bg-card rounded-xl shadow-md border border-border">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Description</th>
                <th className="px-6 py-3 font-medium text-center">Type</th>
                <th className="px-6 py-3 font-medium text-center">Credits</th>
                <th className="px-6 py-3 font-medium text-center">Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, i) => (
                <tr
                  key={i}
                  className="border-t border-border hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4">{t.date}</td>
                  <td className="px-6 py-4">{t.description}</td>
                  <td className="px-6 py-4 text-center">
                    {t.type === "add" ? (
                      <span className="flex items-center justify-center gap-1 text-green-500 font-medium">
                        <ArrowUpRight className="w-4 h-4" /> Add
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-1 text-red-500 font-medium">
                        <ArrowDownLeft className="w-4 h-4" /> Deduct
                      </span>
                    )}
                  </td>
                  <td
                    className={`px-6 py-4 text-center ${
                      t.type === "add" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {t.type === "add" ? "+" : "-"}
                    {t.credits}
                  </td>
                  <td className="px-6 py-4 text-center font-medium">
                    {t.balance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">
            Running low on credits?
          </h3>
          <Button
            size="lg"
            className="text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Buy More Credits
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreditsHistory;
