import { useState, useEffect } from "react";
import { X, Image as ImageIcon, Sparkles, Calendar, Tag } from "lucide-react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { galleryCategories, galleryItems, GalleryCategory, GalleryItem } from "@/data/nisc";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Gallery"
        title={<>Moments & <span className="gradient-text">memories</span></>}
        subtitle="Visual highlights from official meetings, council formation, cultural events, elections, and community drives."
      />

      {/* Filter Tabs */}
      <ScrollReveal variant="blur">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {["All", ...galleryCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "font-accent rounded-full px-4 py-2 text-xs font-bold tracking-wide transition-all duration-300",
                activeCategory === cat
                  ? "gradient-brand text-white shadow-[var(--shadow-glow)] scale-105"
                  : "glass hover:bg-white/60 text-muted-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Masonry / Responsive Grid */}
      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, i) => (
          <ScrollReveal key={item.id} variant="scale" delay={i * 0.05} className={item.span || ""}>
            <div
              onClick={() => setSelectedItem(item)}
              className="group glass relative h-full w-full cursor-pointer overflow-hidden rounded-3xl p-0 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div
                  className="h-full w-full transition-transform duration-700 group-hover:scale-105 flex flex-col justify-between p-6"
                  style={{ background: item.gradient }}
                >
                  <div className="flex items-center justify-between">
                    <span className="glass-strong text-xs font-accent font-bold px-3 py-1 rounded-full text-foreground/90">
                      {item.category}
                    </span>
                    <ImageIcon className="size-5 text-foreground/70" />
                  </div>
                  <div>
                    <span className="font-accent text-[11px] font-semibold text-foreground/80 tracking-wider">
                      {item.date}
                    </span>
                    <h3 className="font-display text-xl font-extrabold text-foreground mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>
              )}

              {/* Hover overlay for actual images */}
              {item.image && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                  <span className="font-accent text-xs font-bold text-primary uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                  <p className="text-xs text-white/80 mt-0.5">{item.date}</p>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass relative max-w-3xl w-full overflow-hidden rounded-3xl border border-white/30 p-6 sm:p-8"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="glass hover:bg-white/80 absolute top-5 right-5 z-10 grid h-10 w-10 place-items-center rounded-full transition-colors"
            >
              <X className="size-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="glass-strong font-accent text-primary inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                  <Tag className="size-3.5" /> {selectedItem.category}
                </span>
                <span className="text-muted-foreground font-accent text-xs font-semibold flex items-center gap-1">
                  <Calendar className="size-3.5" /> {selectedItem.date}
                </span>
              </div>

              {selectedItem.image ? (
                <div className="overflow-hidden rounded-2xl max-h-[60vh]">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-auto object-contain max-h-[60vh]"
                  />
                </div>
              ) : (
                <div
                  className="rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[260px]"
                  style={{ background: selectedItem.gradient }}
                >
                  <span className="gradient-brand grid h-16 w-16 place-items-center rounded-3xl text-white shadow-lg mb-4">
                    <Sparkles className="size-8" />
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-foreground">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs font-semibold text-foreground/80 mt-2">
                    Photo Placeholder — Uploaded event photos will automatically render here.
                  </p>
                </div>
              )}

              <div className="pt-2">
                <h3 className="text-xl font-extrabold">{selectedItem.title}</h3>
                <p className="text-muted-foreground text-xs mt-1">
                  Part of the official NISC archive: {selectedItem.category} ({selectedItem.date})
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

