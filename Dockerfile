# ----- Stage 1: Build -----
# Use a Node.js image to get build tools
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package manifests and lockfile
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (including devDependencies) to build the project
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Run the build script (which runs 'next build')
RUN pnpm build

# ----- Stage 2: Production -----
# Start from a clean, lightweight Node.js image
FROM node:18-alpine AS runner

WORKDIR /app

# Set environment to production for Next.js
ENV NODE_ENV=production

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package manifests and lockfile
COPY package.json pnpm-lock.yaml ./

# Install *only* production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy the build output from the 'builder' stage
COPY --from=builder /app/.next ./.next

# Copy public assets
COPY --from=builder /app/public ./public

# Expose the port Next.js runs on
EXPOSE 3000

# The command to run the optimized Next.js server
# This will run "next start" as defined in your package.json
CMD ["pnpm", "start"]
