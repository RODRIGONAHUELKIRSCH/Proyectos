namespace Tpi_G5_Domus
{
    partial class AgendarCita
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.lblcita = new System.Windows.Forms.Label();
            this.lblaginmob = new System.Windows.Forms.Label();
            this.lblidprop = new System.Windows.Forms.Label();
            this.dateTimePicker1 = new System.Windows.Forms.DateTimePicker();
            this.cbaginmob = new System.Windows.Forms.ComboBox();
            this.tbidprop = new System.Windows.Forms.TextBox();
            this.btnagendarcita = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // lblcita
            // 
            this.lblcita.AutoSize = true;
            this.lblcita.Font = new System.Drawing.Font("Segoe UI", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblcita.Location = new System.Drawing.Point(102, 29);
            this.lblcita.Name = "lblcita";
            this.lblcita.Size = new System.Drawing.Size(426, 32);
            this.lblcita.TabIndex = 0;
            this.lblcita.Text = "Seleccione un dia y horario para la cita";
            // 
            // lblaginmob
            // 
            this.lblaginmob.AutoSize = true;
            this.lblaginmob.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblaginmob.Location = new System.Drawing.Point(151, 175);
            this.lblaginmob.Name = "lblaginmob";
            this.lblaginmob.Size = new System.Drawing.Size(247, 21);
            this.lblaginmob.TabIndex = 1;
            this.lblaginmob.Text = "Seleccione un agente inmobiliario:";
            // 
            // lblidprop
            // 
            this.lblidprop.AutoSize = true;
            this.lblidprop.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblidprop.Location = new System.Drawing.Point(151, 279);
            this.lblidprop.Name = "lblidprop";
            this.lblidprop.Size = new System.Drawing.Size(243, 21);
            this.lblidprop.TabIndex = 2;
            this.lblidprop.Text = "Ingrese el codigo de la propiedad:";
            // 
            // dateTimePicker1
            // 
            this.dateTimePicker1.Location = new System.Drawing.Point(198, 110);
            this.dateTimePicker1.Name = "dateTimePicker1";
            this.dateTimePicker1.Size = new System.Drawing.Size(229, 23);
            this.dateTimePicker1.TabIndex = 3;
            // 
            // cbaginmob
            // 
            this.cbaginmob.FormattingEnabled = true;
            this.cbaginmob.Location = new System.Drawing.Point(198, 222);
            this.cbaginmob.Name = "cbaginmob";
            this.cbaginmob.Size = new System.Drawing.Size(229, 23);
            this.cbaginmob.TabIndex = 4;
            // 
            // tbidprop
            // 
            this.tbidprop.Location = new System.Drawing.Point(198, 326);
            this.tbidprop.Name = "tbidprop";
            this.tbidprop.Size = new System.Drawing.Size(229, 23);
            this.tbidprop.TabIndex = 5;
            // 
            // btnagendarcita
            // 
            this.btnagendarcita.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(54)))), ((int)(((byte)(85)))), ((int)(((byte)(184)))));
            this.btnagendarcita.FlatAppearance.BorderSize = 0;
            this.btnagendarcita.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnagendarcita.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnagendarcita.ForeColor = System.Drawing.SystemColors.ButtonHighlight;
            this.btnagendarcita.Location = new System.Drawing.Point(243, 374);
            this.btnagendarcita.Name = "btnagendarcita";
            this.btnagendarcita.Size = new System.Drawing.Size(128, 37);
            this.btnagendarcita.TabIndex = 6;
            this.btnagendarcita.Text = "Agendar Cita";
            this.btnagendarcita.UseVisualStyleBackColor = false;
            // 
            // AgendarCita
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(251)))), ((int)(((byte)(250)))), ((int)(((byte)(249)))));
            this.ClientSize = new System.Drawing.Size(642, 432);
            this.Controls.Add(this.btnagendarcita);
            this.Controls.Add(this.tbidprop);
            this.Controls.Add(this.cbaginmob);
            this.Controls.Add(this.dateTimePicker1);
            this.Controls.Add(this.lblidprop);
            this.Controls.Add(this.lblaginmob);
            this.Controls.Add(this.lblcita);
            this.Name = "AgendarCita";
            this.Text = "AgendarCita";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Label lblcita;
        private Label lblaginmob;
        private Label lblidprop;
        private DateTimePicker dateTimePicker1;
        private ComboBox cbaginmob;
        private TextBox tbidprop;
        private Button btnagendarcita;
    }
}