﻿// <auto-generated />
using System;
using LiveFest.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace LiveFest.Migrations
{
    [DbContext(typeof(LiveFestContext))]
    partial class LiveFestContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("LiveFest.Domains.Address", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("CEP")
                        .IsRequired()
                        .HasColumnType("VARCHAR(8)");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("VARCHAR(255)");

                    b.Property<decimal?>("Latitude")
                        .HasColumnType("DECIMAL(8,6)");

                    b.Property<decimal?>("Longitude")
                        .HasColumnType("DECIMAL(9,6)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("VARCHAR(255)");

                    b.Property<int?>("Number")
                        .IsRequired()
                        .HasColumnType("INT");

                    b.Property<string>("Street")
                        .IsRequired()
                        .HasColumnType("VARCHAR(255)");

                    b.HasKey("ID");

                    b.ToTable("Address");
                });

            modelBuilder.Entity("LiveFest.Domains.Categories", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("VARCHAR(255)");

                    b.HasKey("ID");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("LiveFest.Domains.Evaluation", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("EventsID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Photo")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("UserID")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("ID");

                    b.HasIndex("EventsID");

                    b.HasIndex("UserID");

                    b.ToTable("Evaluation");
                });

            modelBuilder.Entity("LiveFest.Domains.Events", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("AddressID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("CategoriesID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Date")
                        .HasColumnType("DATE");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("VARCHAR(255)");

                    b.Property<string>("EventName")
                        .IsRequired()
                        .HasColumnType("VARCHAR(255)");

                    b.Property<double>("PhoneNumber")
                        .HasColumnType("FLOAT");

                    b.Property<string>("Photo")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.HasIndex("AddressID");

                    b.HasIndex("CategoriesID");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("LiveFest.Domains.SaveEvents", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("EventsID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("UserID")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("ID");

                    b.HasIndex("EventsID");

                    b.HasIndex("UserID");

                    b.ToTable("SaveEvents");
                });

            modelBuilder.Entity("LiveFest.Domains.Users", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("CPF")
                        .IsRequired()
                        .HasColumnType("VARCHAR(11)");

                    b.Property<int?>("Code")
                        .HasColumnType("INT");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("VARCHAR(255)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("CHAR(60)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("VARCHAR(255)");

                    b.HasKey("ID");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("LiveFest.Domains.Evaluation", b =>
                {
                    b.HasOne("LiveFest.Domains.Events", "Events")
                        .WithMany()
                        .HasForeignKey("EventsID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("LiveFest.Domains.Users", "Users")
                        .WithMany()
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Events");

                    b.Navigation("Users");
                });

            modelBuilder.Entity("LiveFest.Domains.Events", b =>
                {
                    b.HasOne("LiveFest.Domains.Address", "Address")
                        .WithMany()
                        .HasForeignKey("AddressID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("LiveFest.Domains.Categories", "Categories")
                        .WithMany()
                        .HasForeignKey("CategoriesID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Address");

                    b.Navigation("Categories");
                });

            modelBuilder.Entity("LiveFest.Domains.SaveEvents", b =>
                {
                    b.HasOne("LiveFest.Domains.Events", "Events")
                        .WithMany()
                        .HasForeignKey("EventsID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("LiveFest.Domains.Users", "Users")
                        .WithMany()
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Events");

                    b.Navigation("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
