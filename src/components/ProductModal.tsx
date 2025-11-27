import { X } from "lucide-react";
import { useEffect } from "react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  price: string;
}

const ProductModal = ({ isOpen, onClose, title, description, price }: ProductModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-muted rounded-full transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5 text-charcoal" />
        </button>

        <h3 className="text-2xl font-bold text-charcoal mb-4">{title}</h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-rose">{price}</span>
          <button className="bg-rose text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
