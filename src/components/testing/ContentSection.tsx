import { motion } from "framer-motion";

export const ContentSection = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed space-y-4">
        {children}
      </div>
    </motion.section>
  );
};
