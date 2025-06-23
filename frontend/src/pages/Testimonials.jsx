import React, { useRef, useState } from 'react';
import './Testimonials.css';
import TestCard from '../components/TestCard';
import commonAvatar from '../assets/avatar.svg';

const testimonialData = [
  {
    message: "Brotomotive consistently delivers high-quality truck parts. Their team is knowledgeable, and the service is always reliable.",
    author: "Samir K., Fleet Manager",
    userName: "Emily Turner",
    userRole: "Fleet Technician",
    avatar: commonAvatar,
    rating: 5,
  },
  {
    message: "Exceptional customer service and unbeatable prices. We've switched entirely to Brotomo for our replacement parts.",
    author: "Jason P., Transport Ops",
    userName: "Brian Knox",
    userRole: "Workshop Supervisor",
    avatar: commonAvatar,
    rating: 4,
  },
  {
    message: "We’ve seen significant improvements in downtime since using Brotomo’s inventory. Fast shipping and great communication!",
    author: "Nina D., Logistics Coordinator",
    userName: "Sandra Lee",
    userRole: "Procurement Head",
    avatar: commonAvatar,
    rating: 5,
  },
  {
    message: "Reliable, honest, and timely. Brotomo is now our first call for all fleet parts.",
    author: "David R., Operations Lead",
    userName: "Marcus Reed",
    userRole: "Fleet Manager",
    avatar: commonAvatar,
    rating: 4,
  },
  {
    message: "Their warranty program gave us the confidence to switch over completely. Haven’t looked back since.",
    author: "Priya V., Maintenance",
    userName: "Jasmine Cole",
    userRole: "Fleet Technician",
    avatar: commonAvatar,
    rating: 5,
  },
  {
    message: "Super easy to work with. The team helped us source some rare parts on short notice.",
    author: "Carlos M., Warehouse Ops",
    userName: "Oscar James",
    userRole: "Inventory Manager",
    avatar: commonAvatar,
    rating: 4,
  },
  {
    message: "I recommend Brotomo to anyone looking for consistent quality and fast fulfillment.",
    author: "Shreya N., Auto Repair",
    userName: "Linda Young",
    userRole: "Repair Shop Owner",
    avatar: commonAvatar,
    rating: 5,
  },
  {
    message: "Parts always arrive as promised and the team is quick to follow up with support if needed.",
    author: "John T., Fleet Ops",
    userName: "Edward Blake",
    userRole: "Maintenance Lead",
    avatar: commonAvatar,
    rating: 4,
  },
  {
    message: "Zero delays, zero complaints. Excellent experience every time.",
    author: "Zara B., Depot Head",
    userName: "Tanya Smith",
    userRole: "Service Director",
    avatar: commonAvatar,
    rating: 5,
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // drag sensitivity
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="testimonials-title">TESTIMONIALS</h2>
        <h3 className="testimonials-subtitle">What Our Customers Has To Say</h3>
      </div>

      <div
        className="testimonials-scroll"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {testimonialData.map((item, index) => (
          <TestCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
