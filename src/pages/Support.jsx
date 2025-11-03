import Sidebar from "../components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import "../css/support.scss";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

const Support = () => {
  const [formData, setFormData] = useState({
    regarding: "",
    subject: "",
    message: "",
  });
useEffect(() => {
  const observer = new MutationObserver(() => {
    if (document.body.hasAttribute("data-scroll-locked")) {
      document.body.removeAttribute("data-scroll-locked");
    }
  });
  observer.observe(document.body, { attributes: true });
  return () => observer.disconnect();
}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Support request submitted successfully!");
    console.log("Submitted:", formData);
  };

  return (
    <div className="support-page">
      <Sidebar />
      <main className="support-content">
        <div className="support-container">
          <header className="support-header">
            <h1>Help & Support</h1>
            <p>Need help? Fill out the form below and our team will get back to you shortly.</p>
          </header>
          <Card className="support-card">
            {/* <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <p className="description">
                Need help? Fill out the form below and our team will get back to you shortly.
              </p>
            </CardHeader> */}

            <CardContent>
              <form className="support-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <Label htmlFor="regarding">Regarding</Label>
                  
            <Select
              onValueChange={(value) => handleChange({ target: { name: "regarding", value } })}
              value={formData.regarding}
              usePortal={false}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-api-suggestion">New API Suggestion</SelectItem>
                <SelectItem value="feature-requests">Feature Requests</SelectItem>
                <SelectItem value="enhancements">Enhancements</SelectItem>
                <SelectItem value="bug-reporting">Bug Reporting</SelectItem>
                <SelectItem value="account">Account</SelectItem>
                <SelectItem value="other">Other...</SelectItem>
              </SelectContent>
            </Select>
                </div>

                <div className="form-group">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Enter your subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Describe your issue or feedback..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="submit-btn">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Support;
