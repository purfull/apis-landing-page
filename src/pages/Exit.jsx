import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 10) setShow(true);
    };
    document.addEventListener("mouseout", handleMouseLeave);
    return () => document.removeEventListener("mouseout", handleMouseLeave);
  }, []);

  if (!show) return null;

  return (
    <section className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-card p-8 rounded-2xl shadow-2xl max-w-lg w-full text-center border border-border">
        <h2 className="text-3xl font-bold mb-4">Don’t Leave Empty-Handed 🚀</h2>
        <p className="text-muted-foreground mb-6">
          Get your first{" "}
          <span className="text-primary font-semibold">100 credits</span> today
          and start using our APIs instantly.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="px-8 text-lg">
            Buy Credits Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 text-lg"
            onClick={() => setShow(false)}
          >
            No, Thanks
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExitIntentPopup;
