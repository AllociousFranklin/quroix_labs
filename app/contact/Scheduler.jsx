"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, Clock, Check, Sparkles } from "lucide-react";

export const Scheduler = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1); // 1: Date/Time, 2: Form, 3: Success
  const [formData, setFormData] = useState({ name: "", email: "", details: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const timeSlots = ["09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "04:30 PM"];

  // Calendar Helpers
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day) => {
    const clickedDate = new Date(year, month, day);
    // Disable past dates and weekends
    const today = new Date();
    today.setHours(0,0,0,0);
    if (clickedDate < today || clickedDate.getDay() === 0 || clickedDate.getDay() === 6) return;
    
    setSelectedDate(clickedDate);
    setSelectedTime(null);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d0c68d13-0f0f-4e8e-bba6-b411f2c8da24",
          subject: `Blueprint Session: ${formData.name}`,
          from_name: "Quroix Labs Scheduler",
          name: formData.name,
          email: formData.email,
          meeting_date: formattedDateString,
          meeting_time: selectedTime,
          message: `A client has requested a Blueprint Session:\n\nName: ${formData.name}\nEmail: ${formData.email}\nDate: ${formattedDateString}\nTime: ${selectedTime}\n\nProject Scope:\n${formData.details || "No additional details provided."}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStep(3);
      } else {
        alert("Submission failed. Please try again or email us directly at quroixlabs@gmail.com.");
      }
    } catch (error) {
      console.error("Web3Forms Submit Error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formattedDateString = selectedDate ? selectedDate.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) : "";

  return (
    <div className="scheduler-card">
      <div className="scheduler-header">
        <Sparkles className="scheduler-header-icon" />
        <h3 className="small-subheadline white">Initiate Blueprint Session</h3>
      </div>
      
      {step === 1 && (
        <div className="scheduler-step-1">
          <p className="description grey" style={{ marginBottom: "15px" }}>Select a weekday and preferred time for your 30-minute consultation.</p>
          
          <div className="scheduler-layout">
            {/* Calendar Widget */}
            <div className="calendar-widget">
              <div className="calendar-nav">
                <button className="calendar-nav-btn" onClick={handlePrevMonth} type="button">
                  <ChevronLeft size={16} />
                </button>
                <p className="description white" style={{ fontWeight: 600 }}>{months[month]} {year}</p>
                <button className="calendar-nav-btn" onClick={handleNextMonth} type="button">
                  <ChevronRight size={16} />
                </button>
              </div>
              
              <div className="calendar-grid">
                {daysOfWeek.map((day) => (
                  <div key={day} className="calendar-day-header">{day}</div>
                ))}
                
                {Array.from({ length: firstDayIndex }).map((_, i) => (
                  <div key={`empty-${i}`} className="calendar-day empty" />
                ))}
                
                {Array.from({ length: totalDays }).map((_, i) => {
                  const dayNum = i + 1;
                  const dateObj = new Date(year, month, dayNum);
                  const today = new Date();
                  today.setHours(0,0,0,0);
                  const isWeekend = dateObj.getDay() === 0 || dateObj.getDay() === 6;
                  const isPast = dateObj < today;
                  const isDisabled = isWeekend || isPast;
                  const isSelected = selectedDate && selectedDate.getDate() === dayNum && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
                  
                  return (
                    <button
                      key={`day-${dayNum}`}
                      className={`calendar-day ${isDisabled ? "disabled" : "active"} ${isSelected ? "selected" : ""}`}
                      onClick={() => handleDateClick(dayNum)}
                      disabled={isDisabled}
                      type="button"
                    >
                      {dayNum}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Widget */}
            <div className="timeslots-widget">
              <p className="small-description grey" style={{ marginBottom: "10px", display: "flex", alignItems: "center", gap: "5px" }}>
                <Clock size={12} /> Timezone: India Standard Time (IST)
              </p>
              {selectedDate ? (
                <div className="slots-grid">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      className={`slot-btn ${selectedTime === time ? "selected" : ""}`}
                      onClick={() => handleTimeClick(time)}
                      type="button"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="slots-placeholder">
                  <Calendar size={24} className="placeholder-icon" />
                  <p className="small-description grey">Choose an available date to view time slots</p>
                </div>
              )}
            </div>
          </div>

          <button
            className="scheduler-next-btn"
            disabled={!selectedDate || !selectedTime}
            onClick={() => setStep(2)}
            type="button"
          >
            Confirm Appointment Details
          </button>
        </div>
      )}

      {step === 2 && (
        <form className="scheduler-form" onSubmit={handleSubmit}>
          <div className="form-summary">
            <p className="description white" style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "8px" }}>
              <Calendar size={16} className="accent-blue" /> {formattedDateString}
            </p>
            <p className="description white" style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "8px", marginTop: "5px" }}>
              <Clock size={16} className="accent-blue" /> {selectedTime} (IST)
            </p>
          </div>

          <div className="form-group">
            <label className="small-description grey">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="small-description grey">Corporate Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="small-description grey">Project Scope / Automation Requirements</label>
            <textarea
              name="details"
              rows={3}
              placeholder="Tell us about the processes or workflows you are looking to optimize..."
              value={formData.details}
              onChange={handleInputChange}
              className="form-textarea"
            />
          </div>

          <div className="form-actions">
            <button className="form-back-btn" onClick={() => setStep(1)} type="button">
              Back
            </button>
            <button className="form-submit-btn" disabled={isSubmitting} type="submit">
              {isSubmitting ? "Securing Slot..." : "Confirm Strategy Call"}
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <div className="scheduler-success">
          <div className="success-icon-ring">
            <Check size={32} className="success-check" />
          </div>
          <h4 className="subheadline white" style={{ fontSize: "1.5rem", marginTop: "20px" }}>Meeting Scheduled!</h4>
          <p className="description grey" style={{ marginTop: "10px", textAlign: "center" }}>
            A calendar invitation and strategy questionnaire have been sent to <strong>{formData.email}</strong>.
          </p>
          
          <div className="success-details">
            <p className="small-description white"><strong>Date:</strong> {formattedDateString}</p>
            <p className="small-description white" style={{ marginTop: "5px" }}><strong>Time:</strong> {selectedTime} (IST)</p>
            <p className="small-description white" style={{ marginTop: "5px" }}><strong>Host:</strong> Allocious Franklin R</p>
          </div>

          <button
            className="scheduler-reset-btn"
            onClick={() => {
              setStep(1);
              setSelectedDate(null);
              setSelectedTime(null);
              setFormData({ name: "", email: "", details: "" });
            }}
            type="button"
          >
            Schedule Another Meeting
          </button>
        </div>
      )}
    </div>
  );
};
